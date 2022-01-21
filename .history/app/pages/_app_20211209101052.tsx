import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./componets/layout";
import { useState } from "react";
import { MyIdContext } from "./IdContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

function MyApp({ Component, pageProps }: AppProps) {
  const [movieid, setMovieid] = useState<string>("");

  return (
    <MyIdContext.Provider value={{ movieid, setMovieid }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyIdContext.Provider>
  );
}

export default MyApp;
