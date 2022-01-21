import { MyIdContext } from "../IdContext";
import { useContext } from "react";

export default function Detail({ posts }: any) {
  const movieid = useContext(MyIdContext);
  return <div>各映画のデータ</div>;
}
