import { NextPage } from "next";
import React from "react";
import Layout from "../lib/components/Layout";
import { HomeUnitList } from "../sections/Home/components/HomeUnitList";

const HomePage: NextPage = (): JSX.Element => (
  <Layout>
    <HomeUnitList />
  </Layout>
);

export default HomePage;
