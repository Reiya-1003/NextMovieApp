import { MyIdContext } from "../IdContext";
import { useContext } from "react";

export default function Detail({ posts }: any) {
  const movieid = useContext(MyIdContext);
  console.log(movieid.movieid);
  return <div>各映画のデータ</div>;
  async function getStaticProps() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid.movieid}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
    );
    const posts = await res.json();
    console.log(posts);
    return { props: { posts } };
  }
}
