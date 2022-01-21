import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css"
import { MyIdContext } from "../IdContext";
import React, { useContext, useState, useEffect } from "react";

export default function Anime({actionmovie}:any) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const { movieid, setMovieid } = useContext(MyIdContext);
 

  return (
    <div className="bg-black">
      {/*表示する映画ポスター*/}

      <div className="text-white mt-10">アクション</div>
      <ul className={styles.poster}>
        {actionmovie.results.map((post: any) => {
          return (
            <Link href={`/details/${post.id}`}>
            <li key={post.id} className={styles.poster__box }
            
            onClick={() => {
             setMovieid(post.id)
           }}>
             <div  className={styles.poster__img}>
                 
                   <img
                     src={IMG_PATH + post.backdrop_path}
                     className=""
                     style={{ width: "220px", height: "120px" }}
                     onClick={() => {
                       setMovieid(post.id)
                     }}
                   ></img>
                 
               </div>
              
               <div className={styles.poster__text}>
                   <p>{post.title}</p>
               </div>
               
               </li>
               </Link>
          );
        })}
      </ul>
    </div>
  );
}


