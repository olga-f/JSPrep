import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/graphql/apolloClient";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { styletron } from "../util/styletron";
import "./styles.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <DefaultSeo {...SEO} />
      <StyletronProvider value={styletron}>
        <BaseProvider theme={LightTheme}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </BaseProvider>
      </StyletronProvider>
    </>
  );
}
