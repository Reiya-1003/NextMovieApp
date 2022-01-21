import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { MyIdContext } from "../IdContext";
import React, { useContext, useState } from "react";

export default function Horror({ posts }: any) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const { movieid, setMovieid } = useContext(MyIdContext);
  console.log(posts);

  return (
    <div className="bg-black">
      {/*表示する映画ポスター*/}

      <div>人気の作品</div>
      <ul className="flex overflow-x-auto">
        {posts.results.map((post: any) => {
          return (
            <li key={post.id} className="flex-none w-2/5 m-1">
              <Link href={`/details/${post.id}`}>
                <img
                  src={IMG_PATH + post.poster_path}
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

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&with_genres=27`
  );
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}
