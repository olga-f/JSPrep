import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import {
  addApolloState,
  initializeApollo,
} from "../../../lib/graphql/apolloClient";
import { EXERCISE_PATHS, GET_EXERCISE } from "../../../lib/graphql/queries";
import { exerciseWithUnitPaths_exerciseList as PathProps } from "../../../lib/graphql/queries/Exercise/__generated__/exerciseWithUnitPaths";

const ExercisePage = (): JSX.Element => (
  <div title="Users List | Next.js + TypeScript Example">
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    {/* <Exercise /> */}
  </div>
);

export const getStaticPaths: GetStaticPaths = async () => {
  // get all the paths for exercises from a GraphQL at build time
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: EXERCISE_PATHS,
  });
  const paths = data.exerciseList.map((item: PathProps) => ({
    params: { unit: item.unit?.slug, exercise: item.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  // Static generation (SSG)
  await apolloClient.query({
    query: GET_EXERCISE,
    variables: {
      slug: params?.exercise,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
};

export default ExercisePage;
