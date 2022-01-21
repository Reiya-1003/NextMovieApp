import React from 'react'

function BtnLogin({provider}:any) {
    return (
        <div>
            Sigin in with {provider.name}
        </div>
    )
}

export default BtnLogin
