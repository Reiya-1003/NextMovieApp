import React from 'react'
import {signIn}from "next-auth/react"

function BtnLogin({provider}:any) {
    return (
        <div>
        <button className="btn w-100 my-2 py-3">
            Sigin in with {provider.name}
        </button>
        </div>
    )
}

BtnLogin.defaultProps ={

}

export default BtnLogin
