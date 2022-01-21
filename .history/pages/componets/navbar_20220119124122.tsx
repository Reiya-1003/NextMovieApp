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
    <div className={`${styles.nav} ${styles["container-bg"]}`}>
      
         <div className={styles.nav__contents}>
            <div className={styles.nav__logo}>
             <Link href={`/Favo`}>
               <span>
                  <StarsIcon></StarsIcon>
                </span>
              </Link>
             <a href="http://localhost:3000/#">
               MOVIEFLIX
             </a>
            </div>
          </div>
       

        
      
      <div className={styles.nav__login}>
        {!session && <div>
      Not sign in 
      <button onClick={()=>signIn()}>Sign In</button>
      </div>}
      {session && <div>
      sign in as {session.user.name} 
      <button onClick={()=>signOut()}>Sign Out</button></div>}
      </div>
      
    </div>
  );
}
