import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { MyIdContext } from "../IdContext";
import React, { useContext, useState, useEffect } from "react";

export default function Horror() {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const { movieid, setMovieid } = useContext(MyIdContext);
  const [data, setData] = useState({});
  console.log(data);
  useEffect(() => {
    const onSuccess = async (position: any) => {
      const result = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=78eb03987f34d05d918381d81d8257fe&with_genres=27`
      );
      const data = await result.json();
      setData(data.results);
    };
    const onError = (err: any) => {
      console.log(err);
    };
    const options = {
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 30000,
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  }, []);

  return (
    <div className="bg-black">
      {/*表示する映画ポスター*/}

      <div>人気の作品</div>
      {/* <ul className="flex overflow-x-auto">
        {data.map((post: any) => {
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
      </ul> */}
    </div>
  );
}
