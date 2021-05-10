import { NormalizedCacheObject } from "@apollo/client/cache/inmemory/types";
import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from "next";
import { CourseJsonLd, NextSeo } from "next-seo";
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

import { UnitExerciseList } from "../../sections/Unit/components/UnitMain";

const UnitPage = ({ exercises }: ExercisesProps): JSX.Element => {
  const unit = exercises.data.exerciseListByUnitSlug?.find(
    (x) => x !== undefined
  )?.unit;
  const title = unit?.title ?? "";
  const description = unit?.description ?? "";
  const URL = process.env.SITE_URL;
  return (
    <Layout>
      <CourseJsonLd
        courseName={title}
        providerName="JSPrep.org"
        providerUrl={URL}
        description={description}
      />
      <NextSeo
        title={title}
        description={description}
        canonical={URL}
        openGraph={{
          url: URL,
          title: title,
          description: description,
          images: [
            {
              url: `${URL}default.svg`,
              width: 1200,
              height: 630,
              alt: "JavaScript Prep",
            },
          ],
        }}
      />
      <UnitExerciseList exercises={exercises} />
    </Layout>
  );
};

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
