import React, { ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
