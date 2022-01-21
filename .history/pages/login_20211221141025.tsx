import React from 'react'
import {getProviders, getSession}from "next-auth/react"

function Login({providers,session}:any){
    console.log({providers,session})

    if(session) return null;
    return (
    <div>
            <div>
                <h2>
                    DevAT-vietnam
                </h2>
            </div>
        </div>
    
    )
}


Login.getInitialProps = async(context:any)=>{
    return{
        providers: await getProviders(),
        session:await getSession(context)
    }
}
export default Login
