import { MyIdContext } from "../IdContext";
import { useContext } from "react";

export default function Detail() {
  const movieid = useContext(MyIdContext);
  console.log(movieid);
  return <div>各映画のデータ</div>;
}
