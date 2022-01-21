import { MyIdContext } from "../IdContext";
import { useContext, useEffect } from "react";

export default function Detail() {
  const movieid = useContext(MyIdContext);
  console.log(movieid.movieid);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieid.movieid}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
    )
      .then((response) => {
        return response.json();
      })
      .then((firstdata) => {
        console.log(firstdata);
        //取得したJSONデータの処理
        const newFirstlist = firstdata.results;
        setFirstList(newFirstlist);
        console.log(firstdata.results);
        console.log(firstList);
        Movie.shift();
        Movie.push(newFirstlist);
        setMovies(newFirstlist);

        let newLinks = 1;

        setLinks(newLinks);
      })
      .catch((error) => {
        //エラー発生時の処理
        console.log("error");
      });
  }, []);

  return <div>各映画のデータ</div>;
}
