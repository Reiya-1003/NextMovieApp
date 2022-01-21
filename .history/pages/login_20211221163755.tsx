import React from 'react'
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react"





function Login(){
  const {data: session,status} =useSession();
  
  return(
    <div >
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
      {session && (
        <div>
          <p>Signed in as {session.user.email}</p>
          <p>Name {session.user.name}</p>
          <img src={session.user.image} alt={session.user.name} />
        </div>
      )}
    </div>
  );

    
}




export default Login
