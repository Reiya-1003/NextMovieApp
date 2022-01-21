import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer(){
    return (
        <footer className="bg-black text-white"> 
            <div >This is footer no design</div>
            <div>
                <a href="https://twitter.com/home?lang=ja"><TwitterIcon/></a>
                <a><InstagramIcon/></a>
                <a href="https://www.facebook.com/"><FacebookIcon/></a>
                <a><YouTubeIcon/></a>
            </div>
        </footer>
    )
}

