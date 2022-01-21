import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MuiPagination from "@material-ui/lab/Pagination";
import styles from "../styles/Home.module.css";
import { MyIdContext } from "./IdContext";
import React, { useContext, useState } from "react";

export default function Home({ posts }: any) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const { movieid, setMovieid } = useContext(MyIdContext);
  const [searchMovies, setSearchmovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<string>();
  let [pageLinks, setLinks]: any = useState([]);
  const [page, setPage] = useState(1); //ページの個数を保存するその数だけページングを作る
  console.log(searchMovies);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const newResult = data.results;

        setSearchmovies(newResult);

        let newLinks = [];

        for (let i = 0; i < data.total_pages; i++) {
          newLinks.push(i + 1);
        }

        setLinks(newLinks);
        console.log(pageLinks);
        console.log(data.total_pages);
      });
  }; //検索するときのonSbmit
  const handleChange = (e: string | any) => {
    const newSerch = e.target.value;
    setSearchterm(newSerch);
    console.log(searchTerm);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    const newValue = value;
    setPage(newValue);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}&page=${newValue}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const newResult = data.results;
        setSearchmovies(newResult);
        console.log(searchMovies);
      });
  }; //ページ番号ごとの映画を表示するonChange
  return (
    <div className="bg-gray">
      {/* 検索ボックス */}
      <div>
        <section>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="Serch Movie"
                type="text"
                style={{ color: "black" }}
                onChange={handleChange}
              />
            </div>
          </form>
        </section>
      </div>
      {/*表示する映画ポスター*/}
      <div className="flex bg-gray-200">
        {(() => {
          if (searchMovies == ![]) {
            return posts.results.map((post: any) => {
              return (
                <div key={post.id} 
                className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                  
                    <img
                      src={IMG_PATH + post.poster_path}
                      
                      onClick={() => {
                        setMovieid(post.id);
                      }}
                    ></img>
                 
                </div>
              );
            });
          } else {
            return searchMovies.map((post: any) => {
              return (
                <div key={post.id} 
                className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">>
                  <Link href={`/details/${post.id}`}>
                    <img
                      src={IMG_PATH + post.poster_path}
                      style={{ width: "100px", height: "200px" }}
                      onClick={() => {
                        setMovieid(post.id);
                      }}
                    ></img>
                  </Link>
                </div>
              );
            });
          }
        })()}
      </div>
      {/* ページネーション */}
      <div>
        <MuiPagination
          count={pageLinks.length}
          page={page}
          variant="outlined"
          color="secondary"
          onChange={handleChangePage}
        />
      </div>
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
