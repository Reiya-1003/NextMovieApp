import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "./componets/layout";
import { useState } from "react";
import { MyIdContext } from "./IdContext";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react"




const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

function MyApp({ Component,  pageProps}: AppProps) {
  const [movieid, setMovieid] = useState<string>("");

  return (
    <SessionProvider session={pageProps.session}>
    <ApolloProvider client={client}>
 
      <MyIdContext.Provider value={{ movieid, setMovieid }}>
      
        <Layout>
        
          <Component {...pageProps} />
         
        </Layout>
       
       
      </MyIdContext.Provider>
     
    </ApolloProvider>
    </SessionProvider>
    
   
    
  );
}

export default MyApp;
