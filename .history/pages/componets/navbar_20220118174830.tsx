import StarsIcon from "@mui/icons-material/Stars";
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from '../../styles/Home.module.css'
import { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";



export default function Navber() {

  const {data: session,status} =useSession();
  console.log(session)
  return (
    <header className={styles.headbar}>
      
         <span className={styles.headbar__logospace}>
          <Link href={`/Favo`}>
            <div className={styles.headbar__logoicon}>
              <StarsIcon></StarsIcon>
            </div>
            
          </Link>
          
        </span>
        <span className="">
          <a href="http://localhost:3000/#" className="brand-logo">
            <div className={styles.headbar__logotext}>MOVIEFLIX</div>
          </a>
        </span>

        
      
      <span className={styles.headbar__login}>
        {!session && <div>
      Not sign in 
      <button onClick={()=>signIn()}>Sign In</button>
      </div>}
      {session && <div>
      sign in as {session.user.name} 
      <button onClick={()=>signOut()}>Sign Out</button></div>}
        </span>
      
    </header>
  );
}
