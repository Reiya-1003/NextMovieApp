import StarsIcon from "@mui/icons-material/Stars";
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from '../../styles/Home.module.css'
import { useState,useEffect } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";



export default function Navber() {
  const [show,handleShow]=useState(false)
  const transitionNavBar = () =>{
    if(window.scrollY > 200){
      handleShow(true)
    } else {
      handleShow(false)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",
    transitionNavBar);
    return ()=>window.removeEventListener("scroll",transitionNavBar);
  },[]);
   //デザインに使う
  const {data: session,status} =useSession();
  console.log(session)
  return (
    <div className={`${styles.nav} ${show && styles.nav__black}`}>
      
         <span className={styles.nav__contents}>
            <div className={styles.nav__logo}>
             
             <a href="http://localhost:3000/#" className={styles.nav__title}>
               MOVIEFLIX
             </a>
             <Link href={`/Favo`}>
               <span className={styles.nav__list}>
                  マイリスト
                </span>
              </Link>
              <span className={styles.nav__serch}>
          
           <form action="" /* onSubmit={handleSubmit}*/  className={styles.nav__serch}>
            
              <input
                placeholder="Serch Movie"
                type="text"
                style={{ color:"white",background:"transparent"}}
                // onChange={handleChange}
              />
           
            </form>
         </span>
              
          
            </div>
            
            
          </span>
          
         
       

        
      
      <span className={styles.nav__login}>
        {!session && <div className={styles.nav__list}>
      Not sign in 
      <button onClick={()=>signIn()}>Sign In</button>
      </div>}
      {session && <div>
      sign in as {session.user.name} 
      <button onClick={()=>signOut()}>Sign Out</button></div>}
      </span>
      
    </div>
  );
}
