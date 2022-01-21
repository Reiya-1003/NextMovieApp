import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MuiPagination from "@material-ui/lab/Pagination";
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
import React, { useContext, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home(props) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const { movieid, setMovieid } = useContext(MyIdContext);
  const [searchMovies, setSearchmovies] = useState<any>([]);
  const [searchTerm, setSearchterm] = useState<string>();
  let [pageLinks, setLinks]: any = useState([]);
  const [page, setPage] = useState(1); //ページの個数を保存するその数だけページングを作る
  const {data: session,status} =useSession();
  console.log(session)
  console.log(status)

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
    <div className="bg-black">
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
      <section >
        <div className="text-white mt-10">人気の作品</div>
        <ul className="flex overflow-x-auto">
          {(() => {
            if (searchMovies == ![]) {
              return props.topmoviejson.results.map((post: any) => {
                return (
                  <li key={post.id} className="flex-none w-1/4 m-0.5">
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
              });
            } else {
              return searchMovies.map((post: any) => {
                return (
                  <div
                    key={post.id}
                    className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
                  >
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
        </ul>
        <Hollor hollormovie={props.hollajson}/>
        <Action  actionmovie={props.actionjson}/>
        <Comedy comemovie={props.comejson}/>
        <Romance romamovie={props.romajson}/>
        <Anime animovie={props.anijson}/>
        <Terebi tvmovie={props.tvjson}/>
        <Documentary documovie={props.docujson}/>
        <Drama doramovie={props.dorajson}/>
        <War />
      </section>
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
  //topの２０件
  const topmovie = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&page=1`
  );
  const topmoviejson = await topmovie.json();
  console.log(topmoviejson);
　//actionジャンルの２０件
const actionmovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&with_genres=16`
);
const actionjson = await actionmovie.json();
//ホラーの２０件
const hollamovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&with_genres=27`
);
const hollajson = await hollamovie.json();
//コメディの２０件
const comemovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&with_genres=35`
);
const comejson = await comemovie.json();
//ロマンスの２０件
const romamovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&with_genres=10749`
);
const romajson = await romamovie.json();

//アニメ２０件
const animovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&with_genres=16`
);
const anijson = await animovie.json();

//テレビ番組２０件
const tvmovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&with_genres=10749`
);
const tvjson = await tvmovie.json();

//ドキュメント２０件
const documovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&with_genres=10749`
);
const docujson = await documovie.json();

// ドラマの２０件
const doramovie =await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&with_genres=18`
);
const dorajson = await doramovie.json();




  return { props: { topmoviejson,actionjson,hollajson,comejson,romajson,anijson
  ,tvjson,docujson,dorajson} };
}


