import React from 'react'
import Head from "next/head";
import { getSession,useSession, signIn, signOut } from "next-auth/react"





function Login({props}:any){
  console.log(props)
  
  return(
    <div >
      {/* {props.session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
      {props.session && (
        <div>
          <p>Signed in as {props.session.user.email}</p>
          <p>Name {props.session.user.name}</p>
          <img src={props.session.user.image} alt={props.session.user.name} />
        </div>
      )} */}
    </div>
  );

    
}




export default Login


export const getServerSideProps = async (context:any) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};