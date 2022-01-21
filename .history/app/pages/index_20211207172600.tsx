import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ posts }: any) {
  console.log(posts);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  return (
    <div className=".bg-black">
      {posts.results.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
              <img
                                src={IMG_PATH + post.poster_path}
                               
                                style={{ width: 100px, height: 555 }}
                              ></img>
            </li>
          );
        })}}
      <div>{posts.results[0].title}</div>
      <Link href={`/details/1`}>
        <a>映画ごとの詳細画面</a>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&page=1`
  );
  const posts = await res.json();
  console.log(posts);
  return { props: { posts } };
}
