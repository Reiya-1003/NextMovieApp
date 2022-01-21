import React from 'react'

function BtnLogin({provider}:any) {
    return (
        <div className="btn w-100 my-2 py-3">
            Sigin in with {provider.name}
        </div>
    )
}

export default BtnLogin
