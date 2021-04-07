import { NextPage } from "next";
import React from "react";
import { HomeUnitList } from "../sections/Home/components";

const HomePage: NextPage = (): JSX.Element => (
  <main>
    <HomeUnitList />
  </main>
);

export default HomePage;
