import { NormalizedCacheObject } from "@apollo/client/cache/inmemory/types";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Layout from "../../lib/components/Layout";
import {
  addApolloState,
  initializeApollo,
} from "../../lib/graphql/apolloClient";
import { EXERCISE_LIST, UNIT_PATHS } from "../../lib/graphql/queries";
import { unitPaths_unitList } from "../../lib/graphql/queries/UnitPage/__generated__/unitPaths";
import { ExercisesProps } from "../../lib/types";

import { UnitExerciseList } from "../../sections/Unit/components/UnitExerciseList";

const UnitPage = ({ exercises }: ExercisesProps): JSX.Element => (
  <Layout>
    <UnitExerciseList exercises={exercises} />
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async (): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> => {
  // get all the paths for units from a GraphQL at build time
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query: UNIT_PATHS,
  });

  const paths = data.unitList.map((item: unitPaths_unitList) => ({
    params: { unit: item.slug },
  }));
  // "fallback:false" - all paths will be known at build time. If not exist, return 404.
  // "fallback:true" - and uncomment `validate` in getStaticProps if you need
  // to enable statically generating additional units during runtime.
  // And add to UnitPage
  //                if (router.isFallback) {
  //                return <div>Loading...</div>
  //              }
  //   If fallback:true and the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<GetStaticPropsResult<NormalizedCacheObject>> => {
  const apolloClient = initializeApollo();

  // Static generation (SSG)
  const exercises = await apolloClient.query({
    query: EXERCISE_LIST,
    variables: {
      slug: params?.unit,
    },
  });

  return addApolloState(apolloClient, {
    // Pass unit data to the page via props
    props: { exercises },
    // `revalidate` re-generate the unit (value in seconds) in the background
    // if a request comes in (if the page isn’t being visited by users, revalidation will be paused)
    // and updates the static page for *future* requests.
    //  revalidate: 60,
  });
};

export default UnitPage;
