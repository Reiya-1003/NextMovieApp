import { MyIdContext } from "../IdContext";
import { useContext } from "react";

export default function Detail({ posts }: any) {
  const movieid = useContext(MyIdContext);
  console.log(movieid.movieid);
  return <div>各映画のデータ</div>;
}
