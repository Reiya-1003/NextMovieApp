import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from '../../styles/Home.module.css'

export default function Footer(){
    return (
        <footer className={styles.footer}> 
        <div className="mx-56">
            <div className="flex justify-start inline-flex">
                <a className="mr-4" href="https://twitter.com/home?lang=ja"><TwitterIcon/></a>
                <a className="mr-4" href="https://www.instagram.com/"><InstagramIcon/></a>
                <a className="mr-4" href="https://www.facebook.com/"><FacebookIcon/></a>
                <a className="mr-4" href="https://www.youtube.com/"><YouTubeIcon/></a>
            </div>
           <ul className="flex flex-wrap text-gray-400">
                <li className="mb-4 text-xs w-1/4 flex-none p-2">副音声・音声ガイド</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">ヘルプセンター</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">プリペイド・ギフトカード</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">メディアセンター</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">IR・投資家情報</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">採用情報</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">利用規約</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">プライバシー</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">法的事項</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">cookieの設定</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">企業情報</li>
                <li className="mb-4 text-xs w-1/4 flex-none p-2">お問合せ</li>
            </ul>
            <div className="text-xs text-gray-400 p-1 mb-5 border divide-solid border-gray-400" style={{marginRight:"90%"}}>サービスコード</div>
            <div className="text-gray-400" style={{fontSize:"11px"}}>©︎1998-2021 Egamidesu .inc </div>
            </div>
            
           
        </footer>
    )
}


//tailwindで書いてる