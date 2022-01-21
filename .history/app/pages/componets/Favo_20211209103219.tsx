import { useQuery, useMutation } from "@apollo/react-hooks";
import { FAVO_LIST, DELETE_FAVO } from "../../graphql/querys/querys";

export default function Favo() {
  const { loading, error, data } = useQuery(FAVO_LIST);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う

  if (loading) {
    console.log(data);
    return <p>loding...</p>;
  } else if (error) {
    console.log(data);
    return <p>Error...</p>;
  } else {
    return (
      <>
        <div>ここにお気に入り</div>
      </>
    );
  }
}
