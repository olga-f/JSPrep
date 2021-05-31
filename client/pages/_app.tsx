import "./styles.css";

import { BaseProvider, LightTheme } from "baseui";
import { DefaultSeo } from "next-seo";
import { Provider as StyletronProvider } from "styletron-react";

import { ApolloProvider } from "@apollo/client";

import { useApollo } from "../lib/graphql/apolloClient";
import SEO from "../next-seo.config";
import { styletron } from "../util/styletron";

import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ApolloProvider client={apolloClient}>
        <StyletronProvider value={styletron}>
          <BaseProvider theme={LightTheme}>
            <Component {...pageProps} />
          </BaseProvider>
        </StyletronProvider>
      </ApolloProvider>
    </>
  );
}
