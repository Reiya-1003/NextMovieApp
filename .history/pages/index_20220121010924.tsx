import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MuiPagination from "@material-ui/lab/Pagination";
import Serch from "./componets/serch"
import Hollor from "./genre/horror";
import Action from "./genre/action";
import Comedy from "./genre/comedy";
import Romance from "./genre/romance";
import Anime from "./genre/anime";
import Terebi from "./genre/terebi";
import Documentary from "./genre/documentary ";
import Drama from "./genre/drama";
import War from "./genre/war";
import styles from "../styles/Home.module.css";
import { MyIdContext } from "./IdContext";
import { MySerchContext } from "./serchCotext";
import React, { useContext, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Banner from "./componets/banner";

export default function Home(props) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const { movieid, setMovieid } = useContext(MyIdContext);
  const { serch, setSerch } = useContext(MySerchContext);
  

  const {data: session,status} =useSession();
  console.log(session)
  console.log(status)
  console.log(serch)

  const poster = props.topmoviejson.results.map((post: any,i:any) => 
            
               <li className={styles.poster__box }
               key={i} 
               onClick={() => {
                setMovieid(post.id)
              }}>
                <div key={post.id} className={styles.poster__img}>
                    
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
                  
                  )
                 
                  
                


            
            
 
 


  return (
    <div className="bg-black">

      {
        (()=>{
          if(serch.length === 0){
            return(
              <Banner topmovie={props.topmoviejson}/>
            )
          }else{
            return(
              <Serch/>
            )
          }})()
          }
        
     
     
      {/*表示する映画ポスター*/}
      <section >
        <div className="text-white mt-10">人気の作品</div>
         <ul className={styles.poster}>
         {poster}
         </ul>
        <Hollor hollormovie={props.hollajson}/>
        <Action  actionmovie={props.actionjson}/>
        <Comedy comemovie={props.comejson}/>
        <Romance romamovie={props.romajson}/>
        <Anime animovie={props.anijson}/>
        <Terebi tvmovie={props.tvjson}/>
        <Documentary documovie={props.docujson}/>
        <Drama doramovie={props.dorajson}/>
        <War warmovie={props.warjson}/>
      </section>
      
     
    </div>
  );
}

export async function getStaticProps() {
  //topの２０件
  const topmovie = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&page=1`
  );
  const topmoviejson = await topmovie.json();
  console.log(topmoviejson);
　//actionジャンルの２０件
const actionmovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&with_genres=28`
);
const actionjson = await actionmovie.json();
//ホラーの２０件
const hollamovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&with_genres=27`
);
const hollajson = await hollamovie.json();
//コメディの２０件
const comemovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&with_genres=35`
);
const comejson = await comemovie.json();
//ロマンスの２０件
const romamovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&with_genres=10749`
);
const romajson = await romamovie.json();

//アニメ２０件
const animovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&with_genres=16`
);
const anijson = await animovie.json();

//テレビ番組２０件
const tvmovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&with_genres=10770`
);
const tvjson = await tvmovie.json();

//ドキュメント２０件
const documovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&with_genres=99`
);
const docujson = await documovie.json();

// ドラマの２０件
const doramovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&with_genres=18`
);
const dorajson = await doramovie.json();

// 戦争の２０件
const warmovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&with_genres=10752`
);
const warjson = await warmovie.json();




  return { props: { topmoviejson,actionjson,hollajson,comejson,romajson,anijson
  ,tvjson,docujson,dorajson,warjson} };
}


