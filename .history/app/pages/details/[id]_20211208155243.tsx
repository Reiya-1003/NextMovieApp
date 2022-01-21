import { MyIdContext } from "../IdContext";
import { useContext, useEffect, useState } from "react";

export default function Detail({ query }: any) {
  const [movieDetail, setMoviedetail] = useState();
  console.log(movieDetail);

  useEffect(() => {
    const movieid = useContext(MyIdContext);
    async function fetchEmployees() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid.movieid}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
      );
      console.log(response);
    }
    fetchEmployees();
  }, [query]);

  return (
    <>
      <div></div>;
    </>
  );
}

`https://api.themoviedb.org/3/movie/${movieid.movieid}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`;
