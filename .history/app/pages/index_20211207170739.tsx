import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className=".bg-black">
      <div>サーチと映画２０件</div>
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
