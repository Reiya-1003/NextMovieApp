import { MyIdContext } from "../IdContext";
import { useContext, useEffect, useState } from "react";
import { ADD_FAVO, FAVO_LIST } from "../../graphql/querys/querys";
import { useMutation } from "@apollo/react-hooks";

export default function Detail({ query }: any) {
  const movieid = useContext(MyIdContext);
  const [movieDetail, setMoviedetail] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  console.log(movieDetail);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

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
  const [addFavo] = useMutation(ADD_FAVO, {
    refetchQueries: [{ query: FAVO_LIST }],
    awaitRefetchQueries: true,
  });
  const addFavolist = () => {
    addFavo({
      variables: {
        title: movieDetail.title,
        img: movieDetail.poster_path,
        movienumber: movieDetail.id,
      },
    });
    console.log("データベースに追加処理");
  };

  if (loading) {
    return <p> 読み込み中 </p>;
  }
  return (
    <>
      <div>{movieDetail.title}</div>
      <div>
        <img
          src={IMG_PATH + movieDetail.poster_path}
          style={{ width: "100px", height: "150px" }}
        ></img>
      </div>
      <div>{movieDetail.overview}</div>
    </>
  );
}
