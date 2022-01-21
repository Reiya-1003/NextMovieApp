import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { MyIdContext } from "../IdContext";
import React, { useContext, useState, useEffect } from "react";

export default function Action({animovie}) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const { movieid, setMovieid } = useContext(MyIdContext);
  

  return (
    <div className="bg-black">
      {/*表示する映画ポスター*/}

      <div className="text-white mt-10">アニメ</div>
      <ul className="flex overflow-x-auto">
        {animovie.results.map((post: any) => {
          return (
            <li key={post.id} className="flex-none w-1/4 m-1">
              <Link href={`/details/${post.id}`}>
                <img
                  src={IMG_PATH + post.backdrop_path}
                  className="w-96"
                  onClick={() => {
                    setMovieid(post.id);
                  }}
                ></img>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
