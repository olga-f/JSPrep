//
import { useQuery } from "@apollo/client/react/hooks";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { unitPaths as Paths } from "../../lib/graphql/queries/UnitList/__generated__/unitPaths";
import {
  addApolloState,
  initializeApollo,
} from "../../lib/graphql/apolloClient";
import { EXERCISE_LIST, UNIT_PATHS } from "../../lib/graphql/queries";
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

export async function getStaticPaths() {
  // get all the paths for units from a GraphQL
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: UNIT_PATHS,
  });

 const paths = data.unitList.map((unit) => ({ params: { unit: unit.id} }));
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  // Static generation (SSG)
  await apolloClient.query({
    query: EXERCISE_LIST,
    variables: {
      id: params?.unit,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

export default UnitPage;
