import React from 'react'
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react"


function Login(){
  return(
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );

    
}




export default Login
