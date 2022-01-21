import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div>サーチと映画２０件</div>
      <Link href={`/details/1`}>
        <a>映画ごとの詳細画面</a>
      </Link>
      ;
    </div>
  );
}
