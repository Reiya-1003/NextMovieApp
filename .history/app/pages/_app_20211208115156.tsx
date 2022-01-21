import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./componets/layout";
import { MyIdContext } from "./IdContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyIdContext.Provider value="hello from context!!">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyIdContext.Provider>
  );
}

export default MyApp;
