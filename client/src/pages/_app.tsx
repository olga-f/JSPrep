import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/graphql/apolloClient";
import type { AppProps } from "next/app";
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
