
import Link from "next/link";
import styles from "../../styles/Home.module.css"
import { MyIdContext } from "../IdContext";
import React, { useContext, useState, useEffect } from "react";


interface Posts {
  id: number;
  backdrop_path: string;
  title: string;
}

export default function Action({animovie} : {
  animovie: { results: [] };
}) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const { movieid, setMovieid } = useContext(MyIdContext);
  

  return (
    <div className="bg-black">
      {/*表示する映画ポスター*/}

      <div className="text-white mt-10">アニメ</div>
      <ul className="flex overflow-x-auto">
        {animovie.results.map((post: any,i:any) => {
          return (
            <li className={styles.poster__box }
            key={i} 
            onClick={() => {
             setMovieid(post.id)
           }}>
             <div key={post.id} className={styles.poster__img}>
             <Link href={`/details/${post.id}`}>
               {(()=>{
                 if(post.backdrop_path === null){
                   return(
                     <p style={{ width: "220px", height: "120px" ,color:"white",}}>
                       not photo</p>
                   )
                 }else{
                   return(
                    <img
                    src={IMG_PATH + post.backdrop_path}
                    style={{ width: "220px", height: "120px" }}
                    onClick={() => {
                      setMovieid(post.id)
                    }}
                  ></img>)
                 }})()
               }
              </Link>
               </div>
               <Link href={`/details/${post.id}`}>
               <div className={styles.poster__text}>
                 <p>{post.title}</p>
               </div>
               </Link>
               </li>
          );
        })}
      </ul>
    </div>
  );
}
