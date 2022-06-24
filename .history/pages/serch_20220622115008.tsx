import React, { useContext, useState, useEffect, FC } from "react";
import Link from "next/link";
import { MySerchContext } from "./serchCotext";
import { MyIdContext } from "./IdContext";
import { MyWordContext } from "./serchCotext";

import styles from "../styles/Home.module.css";

interface HTMLButtonEvent extends Event {
  currentTarget: HTMLButtonElement;
}

function Serch() {
  const { serch, setSerch } = useContext(MySerchContext)!;
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const { movieid, setMovieid } = useContext(MyIdContext);
  const [page, setPage] = useState(1); //ページの個数を保存するその数だけページングを作る
  const { searchTerm, setSearchterm } = useContext(MyWordContext);
  const [pageNum, setPageNum] = useState<string | []>([]);

  console.log(serch);
 
  let newLinks: number[] = [];

  const numV = (e: HTMLButtonEvent) => {
    console.log(e.currentTarget.id);
    const newPage = e.currentTarget.id;
    setPageNum(newPage);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}&page=${newPage}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const newResult = data;
        setSerch(newResult);
        console.log(serch);
      });
  };
  //totalpageから１〜totalpageの配列を作る
  for (let i = 0; i < serch.total_pages; i++) {
    newLinks.push(i + 1);
    //[1,2,3,4]ができる
  }

  console.log(newLinks);
  const pageN = newLinks.map((num, i) => {
    return (
      <button  key={i} onClick={numV} >
        <li className={styles.page}>{num}</li>
      </button>
    );
  });

  console.log(pageNum);
  console.log(serch);
  console.log(searchTerm);

  console.log(page);

  if (serch.results === undefined) {
    return <div></div>;
  } else {
    return (
      <div>
        <h2 className={styles.kekka}>
          検索結果：作品数 {serch.total_results}作品　{" "}
        </h2>
        <div className={styles.pageblock} style={{ marginBottom: "20px" }}>
          <ul className={styles.pagination}>
            <li>«</li>
            {pageN}
            <li>»</li>
            <li style={{ color: "gray", fontSize: "12px" }}>Page:{pageNum}</li>
          </ul>
        </div>
        <div className={styles.searchCon}>
          {serch.results.map((post: any, i: any) => {
            return (
              <div
                className={styles.searchCon__box}
                key={i}
                onClick={() => {
                  setMovieid(post.id);
                }}
              >
                　　　　　　　　　　　　　　　　　
                <div className={styles.searchCon__item}>
                  <Link href={`/details/${post.id}`}>
                    {(() => {
                      if (post.poster_path === null) {
                        return (
                          <p
                            style={{
                              color: "white",
                              paddingTop: "50%",
                              fontSize: "40px",
                            }}
                          >
                            　　　　　　　　　　 not photo
                          </p>
                        );
                      } else {
                        return (
                          <img
                            src={IMG_PATH + post.poster_path}
                            onClick={() => {
                              setMovieid(post.id);
                            }}
                          ></img>
                        );
                      }
                    })()}
                  </Link>
                </div>
                <Link href={`/details/${post.id}`}>
                  <div className={styles.searchCon__text}>
                    <p>{post.title}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.pageblock}>
          <ul className={styles.pagination}>
            <li>«</li>
            {pageN}
            <li>»</li>
            <li style={{ color: "gray", fontSize: "12px" }}>Page:{pageNum}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Serch;
