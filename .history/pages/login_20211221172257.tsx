import React from 'react'
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react"





function Login(){
  const { data: session, status } = useSession()
  console.log(session)

  if(status){
     return <p>Loading.....</p>
  }
  
  return(
    <div >
       <h1>login page</h1>
       {!session && (
         <div>
         <button onClick={()=>signIn}>Sign In</button>
         </div>
       )}
    </div>
  );

    
}




export default Login
