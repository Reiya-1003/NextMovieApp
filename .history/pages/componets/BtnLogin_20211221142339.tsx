import React from 'react'

function BtnLogin({provider}:any) {
    return (
        <button className="btn w-100 my-2 py-3">
            Sigin in with {provider.name}
        </button>
    )
}

BtnLogin.defaultProps ={

}

export default BtnLogin
