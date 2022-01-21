import React from 'react'
import {getProviders, getSession}from "next-auth/react"

function Login(){
    return (<div>
            <h1>Login</h1>
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