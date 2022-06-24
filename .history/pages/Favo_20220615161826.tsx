import Link from "next/link";
import { useState, useEffect,useContext } from "react";
import { useQuery,  } from "@apollo/react-hooks";
import { FAVO_LIST, } from "../graphql/querys/querys";

import { signIn, signOut, useSession } from "next-auth/react";
import { MyIdContext } from "./IdContext";
import styles from "../styles/Home.module.css"

export default function Favo() {
  const { loading, error, data } = useQuery(FAVO_LIST);
  const { movieid, setMovieid } = useContext(MyIdContext);
  const {data: session,status} =useSession();
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const [currentMovie, setMovie] = useState([]);
  console.log(FAVO_LIST);
  console.log(data);
  console.log(currentMovie);
  console.log(session)

  useEffect(() => {
    if (loading === false && data) {
      setMovie(data.favos);
    }
  }, [loading, data]);

 

  let userlist:any =currentMovie.filter(function(e){
    if(session)
    return e.userId === session.user.id
  })
console.log(userlist)

 

  if (loading) {
    return <p>loding...</p>;
  } else if (error) {
    return <p>Error...</p>;
  } else {
    return (
      <section>
        <h2 className={styles.kekka}>マイリスト</h2>

        <div className={styles.item}>
        
                { userlist.map((list: any, i: any) => {
                  return (
                    <Link href={`/details/${list.movienumber}`}>
                    <div  key={i} className={styles.item__box}　 onClick={() => {
                                setMovieid(list.movienumber);
                                console.log(movieid)
                              }}>
                     
                        <div className={styles.item__img}>
                        
                            <img
                              src={`${IMG_PATH}${list.img}`}
                              alt="card image"
        
                              onClick={() => {
                                setMovieid(list.movienumber);
                                console.log(movieid)
                              }}
                            ></img>
                          
                        </div>
　　　　　　　　　　　　　　　
                        <div className={styles.item__text}>
        　　　　　　　　　　　　　<p>{list?.title || list?.name || list?.original_name}</p>
  　　　　　　　　　　　　　</div>
                      
                    </div>
                    </Link>
                  );
                })
              }

{!session && <div>
      Not sign in 
      <button onClick={()=>signIn()}>Sign In</button>
      </div>}
      {session && <div>
      sign in as {session.user.email} 
      <button onClick={()=>signOut()}>Sign Out</button></div>}
           
        </div>
      </section>
    );
  }
}


//https://image.tmdb.org/t/p/w1280/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg