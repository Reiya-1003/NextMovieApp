import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./componets/layout";
import { useState } from "react";
import { MyIdContext } from "./IdContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [movieid, setMovieid] = useState("211");

  return (
    <MyIdContext.Provider value={movieid}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyIdContext.Provider>
  );
}

export default MyApp;
