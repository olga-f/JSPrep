import { NormalizedCacheObject } from "@apollo/client/cache/inmemory/types";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Layout from "../../../lib/components/Layout";
import {
  addApolloState,
  initializeApollo,
} from "../../../lib/graphql/apolloClient";
import { EXERCISE_PATHS, GET_EXERCISE } from "../../../lib/graphql/queries";
import { exerciseWithUnitPaths_exerciseList as PathProps } from "../../../lib/graphql/queries/Exercise/__generated__/exerciseWithUnitPaths";
import { ExerciseMain } from "../../../sections/Exercise/components/ExerciseMain";

const ExercisePage: NextPage = (): JSX.Element => (
  <Layout title="Exercise">
    <ExerciseMain />
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> => {
  // get all the paths for exercises from a GraphQL at build time
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: EXERCISE_PATHS,
  });
  const paths = data.exerciseList.map((item: PathProps) => ({
    params: { unit: item.unit?.slug, exercise: item.slug },
  }));
  // fallback:true enable statically generating additional pages
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<NormalizedCacheObject>> => {
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
    // Re-generate the exercise at most once per 60 second
    // if a request comes in
  //  revalidate: 60,
  });
};

export default ExercisePage;
