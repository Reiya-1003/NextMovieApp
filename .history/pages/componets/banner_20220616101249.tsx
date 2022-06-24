import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import "../../styles/Home.module.css";
import axios from "../api/axios";

type SomeMovie = {
  movie: number;
  name:any;
};
type APIResult = {
  backdrop_path: any,
 
};

export default function Banner() {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const [movie, setMovie] = useState<SomeMovie>({});

  useEffect(() => {
    //レンダリングするたびに最上部に表示される映画
    async function fetchDate(): Promise<Object>  {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=78eb03987f34d05d918381d81d8257fe&language=ja&page=1`
      );
      //SomeMovieの型推論（numberの値）が効いてる
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchDate();
  }, []);

  console.log(movie);

  function truncate(string: string, n: number) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("${IMG_PATH}${movie?.backdrop_path}")`,
      }}
    >
      <div className={styles.banner__contents}>
        <h1 className={styles.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles.banner_buttons}>
          <button className={styles.banner_button}>Play</button>
          <button className={styles.banner_button}>My List</button>
        </div>
        <h1 className={styles.banner_description}>
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>

      <div className={styles.banner__fadeBottom}></div>
    </header>
  );
}
