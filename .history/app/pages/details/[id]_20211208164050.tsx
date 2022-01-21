import { MyIdContext } from "../IdContext";
import { useContext, useEffect, useState } from "react";

export default function Detail({ query }: any) {
  const movieid = useContext(MyIdContext);
  const [movieDetail, setMoviedetail] = useState<any>();
  const [loading, setLoading] = useState(false);
  console.log(movieDetail);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieid.movieid}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
    )
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        //取得したJSONデータの処理
        const newdata = data;
        setMoviedetail(newdata);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <p> 読み込み中 </p>;
  }
  return (
    <>
      <div></div>;
    </>
  );
}
