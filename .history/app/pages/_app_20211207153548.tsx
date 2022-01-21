import "../styles/globals.css";
import Layout from "./componets/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
