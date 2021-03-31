import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import {
  addApolloState,
  initializeApollo,
} from "../../lib/graphql/apolloClient";
import { GET_EXERCISE_LIST, UNIT_PATHS } from "../../lib/graphql/queries";
import { unitPaths_unitList as PathProps } from "../../lib/graphql/queries/Unit/__generated__/unitPaths";
import { UnitExerciseList } from "../../sections/Unit/components";

const UnitPage = (): JSX.Element => (
  <div title="Users List | Next.js + TypeScript Example">
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>

    <UnitExerciseList />
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
  // get all the paths for units from a GraphQL at build time
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: UNIT_PATHS,
  });

  const paths = data.unitList.map((item: PathProps) => ({
    params: { unit: item.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  // Static generation (SSG)
  await apolloClient.query({
    query: GET_EXERCISE_LIST,
    variables: {
      slug: params?.unit,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

export default UnitPage;
