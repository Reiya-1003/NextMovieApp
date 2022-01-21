import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import "../styles/Home.module.css"
import type { AppProps } from "next/app";
import Layout from "./componets/layout";
import { useState } from "react";
import { MyIdContext } from "./IdContext";
import { MySerchContext } from "./serchCotext"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react"




const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

function MyApp({ Component,  pageProps}: AppProps) {
  const [movieid, setMovieid] = useState<string>("");
  const [serch,setSerch]=useState([])
  return (
    <SessionProvider session={pageProps.session}>
    <ApolloProvider client={client}>
      
      <MyIdContext.Provider value={{ movieid, setMovieid }}>
       <MySerchContext.Provider value={{serch, setSerch}}>
        <Layout>
        
          <Component {...pageProps} />
         
        </Layout>
       
       </MySerchContext.Provider>
      </MyIdContext.Provider>
     
    </ApolloProvider>
    </SessionProvider>
    
   
    
  );
}

export default MyApp;
