import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer(){
    return (
        <footer className="bg-black text-white"> 
            <div >This is footer no design</div>
            <div>
                <TwitterIcon/>
                <InstagramIcon/>
            </div>
        </footer>
    )
}

