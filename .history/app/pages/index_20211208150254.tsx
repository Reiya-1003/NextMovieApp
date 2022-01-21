import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { MyIdContext } from "./IdContext";
import { useContext, useState } from "react";

export default function Home({ posts }: any) {
  console.log(posts);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const { movieid, setMovieid } = useContext(MyIdContext);
  console.log(movieid);

  return (
    <div className=".bg-black">
      {/* {posts.results.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/details/${post.id}`}>
              <a
                onClick={() => {
                  setMovieid(post.id);
                }}
              >
                {post.title}
              </a>
            </Link>
            <img
              src={IMG_PATH + post.poster_path}
              style={{ width: "100px", height: "200px" }}
            ></img>
          </li>
        );
      })} */}

      <Link href={`/details/1`}>
        <a>映画ごとの詳細画面</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/512195?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
  );
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}

`https://api.themoviedb.org/3/movie/now_playing?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&page=1`;
