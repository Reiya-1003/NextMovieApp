import { MyIdContext } from "../IdContext";
import { useContext, useEffect, useState } from "react";

export default function Detail() {
  const movieid = useContext(MyIdContext);

  const dataget = fetch(
    `https://api.themoviedb.org/3/movie/${movieid.movieid}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
  )
    .then((response) => {
      return response.json();
    })
    .then((firstdata) => {
      console.log(firstdata);
      //取得したJSONデータの処理
      const newFirstlist = firstdata;
      setMoviedetail(newFirstlist);
    })
    .catch((error) => {
      //エラー発生時の処理
      console.log("error");
    });
  const [movieDetail, setMoviedetail] = useState(dataget);

  return (
    <>
      <div>{movieDetail.id}</div>;
    </>
  );
}
