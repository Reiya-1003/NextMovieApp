import { MyIdContext } from "../IdContext";
import { useContext, useEffect, useState , Dispatch,SetStateAction} from "react";
import { ADD_FAVO, FAVO_LIST, DELETE_FAVO } from "../../graphql/querys/querys";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useSession } from "next-auth/react";
import styles from "../../styles/Home.module.css";

interface MovieDe{
  [index: string]: string,
  [id: string]: string,
}
export default function Detail() {
  const movieid = useContext(MyIdContext);
  const [movieDetail, setMoviedetail]= useState<MovieDe[]>([]);
  const [load, setLoad] = useState(false);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const { loading, error, data } = useQuery(FAVO_LIST);
  const { data: session, status } = useSession();
  const [currentMovie, setMovie] = useState([]);
  console.log(data);
  console.log(movieDetail);

  useEffect(() => {
    
    if (loading === false && data) {
      console.log(movieid.movieid)
      setLoad(true);
      fetch(
        `https://api.themoviedb.org/3/movie/${movieid.movieid}?api_key=78eb03987f34d05d918381d81d8257fe&language=ja`
      )
        .then((r) => r.json())
        .then((data) => {
          //取得したJSONデータの処理
          const newdata = data;
          setMoviedetail(newdata);
        });
      setMovie(data.favos);
    }
  }, [loading, data]);
  console.log(currentMovie);
  console.log(movieDetail);

  const togllebuton = currentMovie.filter(function (e) {
    if (session)
      return e.userId === session.user.id && movieDetail.id === e.movienumber;
  });
  console.log(togllebuton);

  const [addFavo] = useMutation(ADD_FAVO, {
    refetchQueries: [{ query: FAVO_LIST }],
    awaitRefetchQueries: true,
  });
  const addFavolist = () => {
    addFavo({
      variables: {
        title: movieDetail.title,
        img: movieDetail.backdrop_path,
        movienumber: movieDetail.id,
        userId: session.user.id,
      },
    });
    console.log("データベースに追加処理");
  };

  const [deleteFavo] = useMutation(DELETE_FAVO, {
    refetchQueries: [{ query: FAVO_LIST }],
    awaitRefetchQueries: true,
  });

  const handleDelete = (id: any) => {
    deleteFavo({ variables: { id } });
    console.log("デリートするよ");
  };

  if (loading) {
    return <p>loding...</p>;
  } else if (error) {
    return <p>Error...</p>;
  } else {
    return (
      <div className={styles.mainView}>
        <div className={styles.title__conteiner}>
          <div className={styles.title__main}>
            {movieDetail.backdrop_path && (
              <div className={styles.title__fot}>
                <img
                  src={IMG_PATH + movieDetail.backdrop_path}
                  style={{ width: "100%" }}
                ></img>
              </div>
            )}
            {!movieDetail.backdrop_path && (
              <div className={styles.title__fot}>
                <div className={styles.title__nomoji}>No-visual</div>
              </div>
            )}
          </div>

          <div className={styles.title__cavas}>
            <div className={styles.title__cavas__Con}>
              　　
              {movieDetail.poster_path && (
                <div className={styles.title__cavas__fot}>
                  <img src={IMG_PATH + movieDetail.poster_path}></img>
                </div>
              )}
              {!movieDetail.poster_path && (
                <div className={styles.title__cavas__fot}>
                  <div>No-visual</div>
                </div>
              )}
              <div className={styles.title__cavas__detail}>
                <h2 className={styles.title__cavas__name}>
                  {movieDetail.original_title}
                </h2>
                <div className={styles.title__cavas__buttonarea}>
                  {session && togllebuton.length === 0 && (
                    <button
                      onClick={addFavolist}
                      className={styles.banner_button}
                    >
                      追加
                    </button>
                  )}
                  {session && togllebuton.length === 1 && (
                    <button
                      onClick={() => handleDelete(togllebuton[0].id)}
                      className={styles.banner_button}
                    >
                      追加済
                    </button>
                  )}
                  <button className={styles.banner_button}>シェア</button>
                </div>
                <div className={styles.title__cavas__overview}>
                  <div className={styles.title__cavas__ara}>あらすじ</div>

                  {movieDetail.overview && (
                    <div className={styles.title__cavas__nai}>
                      {movieDetail.overview}
                    </div>
                  )}
                  {!movieDetail.overview && (
                    <div className={styles.title__cavas__nai}>no-overview</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
