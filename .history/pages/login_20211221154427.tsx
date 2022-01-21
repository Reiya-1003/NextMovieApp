import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


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
