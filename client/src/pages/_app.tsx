import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/graphql/apolloClient";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { styletron } from "../util/styletron";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps);

  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <ApolloProvider client={apolloClient}>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </ApolloProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}
