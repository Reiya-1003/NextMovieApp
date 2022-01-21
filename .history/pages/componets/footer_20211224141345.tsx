import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer(){
    return (
        <footer className="bg-black "> 
        <div className="mx-56 ">
            <div>
                <a className="mr-4" href="https://twitter.com/home?lang=ja"><TwitterIcon/></a>
                <a className="mr-4" href="https://www.instagram.com/"><InstagramIcon/></a>
                <a className="mr-4" href="https://www.facebook.com/"><FacebookIcon/></a>
                <a className="mr-4" href="https://www.youtube.com/"><YouTubeIcon/></a>
            </div>
           <ul className="flex flex-wrap text-gray-400">
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">何描こうか迷い中</li>
            </ul>
            </div>
        </footer>
    )
}
