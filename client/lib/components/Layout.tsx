import React, { ReactNode } from "react";
import { Header } from "./Header";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "JS Prep.org" }: Props): JSX.Element => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
    </Head>
    <Header />
    {children}
  </>
);

export default Layout;
