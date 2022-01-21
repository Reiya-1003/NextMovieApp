import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer(){
    return (
        <footer className="bg-black text-white"> 
        <div className="mx-56">
            <div >This is footer no design</div>
            <div>
                <a href="https://twitter.com/home?lang=ja"><TwitterIcon/></a>
                <a href="https://www.instagram.com/"><InstagramIcon/></a>
                <a href="https://www.facebook.com/"><FacebookIcon/></a>
                <a href="https://www.youtube.com/"><YouTubeIcon/></a>
            </div>
           <ul className="flex flex-wrap">
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="w-1/4 flex-none p-2">何描こうか迷い中</li>
            </ul>
            </div>
        </footer>
    )
}

