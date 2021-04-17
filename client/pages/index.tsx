import { GetStaticProps } from "next";
import React from "react";
import Layout from "../lib/components/Layout";
import { addApolloState, initializeApollo } from "../lib/graphql/apolloClient";
import { HomeUnitList } from "../sections/Home/components/HomeUnitList";
import { UNIT_LIST } from "../lib/graphql/queries";
import { UnitsProps } from "../lib/types";

const HomePage = ({ units }: UnitsProps): JSX.Element => {
  return (
    <Layout>
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
