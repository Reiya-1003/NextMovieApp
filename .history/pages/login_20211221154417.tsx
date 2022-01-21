import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}


function Login({providers,session}:any){
    console.log({providers,session})

    if(session) return null;
    return (
    <div>
            <div>
                <h2>
                    DevAT-vietnam
                </h2>
                <p>Login with NextAuth</p>

                 
            </div>
        </div>
    
    )
}



export default Login
