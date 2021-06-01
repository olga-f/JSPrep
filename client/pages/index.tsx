import { GetStaticProps } from "next";
import { CourseJsonLd, NextSeo } from "next-seo";
import React from "react";

import Layout from "../lib/components/Layout";
import { addApolloState, initializeApollo } from "../lib/graphql/apolloClient";
import { UNIT_LIST } from "../lib/graphql/queries";
import { UnitsProps } from "../lib/types";
import { HomeUnitList } from "../sections/Home/components/HomeMain";

const HomePage = ({ units }: UnitsProps): JSX.Element => {
  const URL = process.env.SITE_URL;
  return (
    <Layout>
      <CourseJsonLd
        courseName="JavaScript Preparation | Run JavaScript, Practice Problems"
        providerName="JSPrep.org"
        providerUrl={URL}
        description="Improve your JavaScript coding skills"
      />
      <NextSeo
        title="JavaScript | JS Prep"
        description="JavaScript Preparation: Practice Problems on JSPrep.org"
        canonical={URL}
        openGraph={{
          url: URL,
          title: "JavaScript Preparation | JSPrep.org",
          description: "Run JavaScript, Practice Problems on JSPrep.org",
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
      <HomeUnitList units={units} />
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  // Static generation (SSG)
  const units = await apolloClient.query({
    query: UNIT_LIST,
  });

  if (!units) {
    return {
      notFound: true,
    };
  }
  return addApolloState(apolloClient, {
    // Pass unit data to the page via props
    props: { units },
    // `revalidate` re-generate the unit (value in seconds) in the background
    // if a request comes in (if the page isn’t being visited by users, revalidation will be paused)
    // and updates the static page for *future* requests.
    //  revalidate: 60,
  });
};

export default HomePage;
