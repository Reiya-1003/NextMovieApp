import { MyIdContext } from "../IdContext";
import { useContext, useEffect, useState } from "react";

export default function Detail({ query }: any) {
  const movieid = useContext(MyIdContext);
  const [movieDetail, setMoviedetail] = useState();
  console.log(movieDetail);

  useEffect(() => {
    async function fetchEmployees() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid.movieid}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          //取得したJSONデータの処理
        });
    }
    fetchEmployees();
  }, [query]);

  return (
    <>
      <div></div>;
    </>
  );
}
