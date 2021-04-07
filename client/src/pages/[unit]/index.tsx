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
import {
  addApolloState,
  initializeApollo,
} from "../../lib/graphql/apolloClient";
import { EXERCISE_LIST, UNIT_PATHS } from "../../lib/graphql/queries";
import { unitPaths_unitList as PathProps } from "../../lib/graphql/queries/Unit/__generated__/unitPaths";
import { UnitExerciseList } from "../../sections/Unit/components";

const UnitPage: NextPage = (): JSX.Element => (
  <main>
    <UnitExerciseList />
  </main>
);

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> => {
  // get all the paths for units from a GraphQL at build time
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: UNIT_PATHS,
  });

  const paths = data.unitList.map((item: PathProps) => ({
    params: { unit: item.slug },
  }));
  // fallback:true enable statically generating additional pages
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<NormalizedCacheObject>> => {
  const apolloClient = initializeApollo();

  // Static generation (SSG)
  await apolloClient.query({
    query: EXERCISE_LIST,
    variables: {
      slug: params?.unit,
    },
  });

  return addApolloState(apolloClient, {
    props: {},
    // Re-generate the unit at most once per 2 second
    // if a request comes in
    revalidate: 2,
  });
};

export default UnitPage;
