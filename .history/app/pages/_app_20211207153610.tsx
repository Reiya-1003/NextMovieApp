import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./componets/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
