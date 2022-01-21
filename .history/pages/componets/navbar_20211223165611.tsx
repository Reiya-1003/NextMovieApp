import StarsIcon from "@mui/icons-material/Stars";
import { useState } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";



export default function Navber() {

  const {data: session,status} =useSession();
  console.log(session)
  return (
    <header className="bg-black fixed">
      <div>
         <span className="flex-none">
          <Link href={`/Favo`}>
            <div className="text-red-600">
              <StarsIcon></StarsIcon>
            </div>
            
          </Link>
          
        </span>
        <span className="">
          <a href="http://localhost:3000/#" className="brand-logo">
            <div className="text-red-600">MOVIEFLIX</div>
          </a>
        </span>

        
      
      <span className="text-white ">
        {!session && <div>
      Not sign in 
      <button onClick={()=>signIn()}>Sign In</button>
      </div>}
      {session && <div>
      sign in as {session.user.name} 
      <button onClick={()=>signOut()}>Sign Out</button></div>}
        </span>
        </div>
    </header>
  );
}
