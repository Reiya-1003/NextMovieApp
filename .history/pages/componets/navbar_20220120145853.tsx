import StarsIcon from "@mui/icons-material/Stars";
import TwitterIcon from '@mui/icons-material/Twitter';
import styles from '../../styles/Home.module.css'
import { useState,useEffect,useContext } from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { MySerchContext } from "../serchCotext";



export default function Navber() {
  const [searchMovies, setSearchmovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<string>();
  const { serch, setSerch } = useContext(MySerchContext);
  let [pageLinks, setLinks]: any = useState([]);
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


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const newResult = data.results;
        console.log(newResult)

        setSerch(newResult);
        console.log(serch)

        let newLinks = [];

        for (let i = 0; i < data.total_pages; i++) {
          newLinks.push(i + 1);
        }

        setLinks(newLinks);
        console.log(pageLinks);
        console.log(data.total_pages);
      });
      
  }; //検索するときのonSbmit
  const handleChange = (e: string | any) => {
    const newSerch = e.target.value;
    setSearchterm(newSerch);
    console.log(searchTerm);
  };

  
  return (
    <div className={`${styles.nav} ${show && styles.nav__black}`}>
      
         <div className={styles.nav__contents}>
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
          
           <form action=""  onSubmit={handleSubmit} className={styles.nav__serchbox}>
            
              <input
                placeholder="Serch Movie"
                type="text"
                className={styles.nav__serchicon}
                onChange={handleChange}
              />
           
            </form>
         </span>
              
          
            </div>
            
            
          </div>
          
         
       

        
      
      <span className={styles.nav__login}>
        {!session && <div className={styles.nav__list}>
     
      <button onClick={()=>signIn()}>Sign In</button>
      </div>}
      {session && <div className={styles.nav__list}>
      {session.user.name} 
      <button onClick={()=>signOut()}> Sign Out</button></div>}
      </span>
      
    </div>
  );
}
