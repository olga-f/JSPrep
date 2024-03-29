import Layout from "../../../lib/components/Layout";
import { Breadcrumbs } from "baseui/breadcrumbs";
import { CourseJsonLd, NextSeo } from "next-seo";
import { EXERCISE_PATHS, GET_EXERCISE } from "../../../lib/graphql/queries";
import { ExerciseMain } from "../../../sections/Exercise/components/ExerciseMain";
import { StyledLink } from "baseui/link";
import { useStyletron } from "baseui";
import type {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsResult,
} from "next";
import type { ParsedUrlQuery } from "querystring";
import type { NormalizedCacheObject } from "@apollo/client/cache/inmemory/types";
import {
  addApolloState,
  initializeApollo,
} from "../../../lib/graphql/apolloClient";
import type { exerciseWithUnitPaths_exerciseList as PathProps } from "../../../lib/graphql/queries/ExercisePage/__generated__/exerciseWithUnitPaths";
import type { ExerciseData } from "../../../lib/types";

const ExercisePage = ({ exercise }: ExerciseData): JSX.Element => {
  const URL = process.env.SITE_URL ?? "";
  const unitPath = exercise.data.exerciseBySlug.unit?.slug ?? "";
  const exercisePath = `/${exercise.data.exerciseBySlug.slug}`;
  const unitTitle = exercise.data.exerciseBySlug.unit?.title;
  const current = exercise.data.exerciseBySlug.name;
  const description = exercise.data.exerciseBySlug.name ?? "";
  const [css, theme] = useStyletron();
  return (
    <Layout>
      <CourseJsonLd
        courseName={current}
        providerName="JSPrep.org"
        providerUrl={URL}
        description={description}
      />
      <NextSeo
        title={current}
        description={description}
        canonical={URL + unitPath + exercisePath}
        openGraph={{
          url: URL,
          title: current,
          description: description,
          images: [
            {
              url: `${URL}jsprep.jpg`,
              width: 1200,
              height: 630,
              alt: "JavaScript Prep",
            },
          ],
        }}
      />
      <div
        className={css({
          marginLeft: theme.sizing.scale550,
          marginRight: theme.sizing.scale550,
        })}
      >
        <Breadcrumbs>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href={`/${unitPath}`}>{unitTitle}</StyledLink>
          <span>{current}</span>
        </Breadcrumbs>
      </div>

      <ExerciseMain exercise={exercise} />
    </Layout>
  );
};

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
  // "fallback:false" - qll paths will be known at build time. If not exist, return 404.
  // "fallback:true"  - enable statically generating additional exercises during runtime
  // And add to ExercisePage
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
  const exercise = await apolloClient.query({
    query: GET_EXERCISE,
    variables: {
      slug: params?.exercise,
    },
  });

  return addApolloState(apolloClient, {
    // Pass exercise data to the page via props
    props: { exercise },
    // `revalidate` re-generate the exercise (value in seconds) in the background
    // if a request comes in (if the page isn’t being visited by users, revalidation will be paused)
    // and updates the static page for *future* requests.
    //  revalidate: 60,
  });
};

export default ExercisePage;
