import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import "../styles/Home.module.css"
import type { AppProps } from "next/app";
import Layout from "./componets/layout";
import { useState } from "react";
import { MyIdContext } from "./IdContext";
import { MySerchContext } from "./serchCotext"
import { MyWordContext } from "./serchCotext"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react"





const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache,
});

function MyApp({ Component,  pageProps}: AppProps) {
  const [movieid, setMovieid] = useState<string>("");
  const [serch,setSerch]=useState<string | []>([])
  const [searchTerm, setSearchterm]= useState<string>("");
  return (
    <SessionProvider session={pageProps.session}>
    <ApolloProvider client={client}>
      
      <MyIdContext.Provider value={{ movieid, setMovieid }}>
       <MySerchContext.Provider value={{serch, setSerch}}>
         <MyWordContext.Provider value={{searchTerm,setSearchterm}}>
        <Layout>
        
          <Component {...pageProps} />
         
        </Layout>
        </MyWordContext.Provider>
       </MySerchContext.Provider>
      </MyIdContext.Provider>
     
    </ApolloProvider>
    </SessionProvider>
    
   
    
  );
}

export default MyApp;
