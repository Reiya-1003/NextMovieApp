import { MyIdContext } from "../IdContext";
import { useContext, useEffect, useState } from "react";
import { ADD_FAVO, FAVO_LIST,DELETE_FAVO } from "../../graphql/querys/querys";
import { useMutation,useQuery } from "@apollo/react-hooks";

import Button from "@mui/material/Button";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LinkM from "@mui/material/Link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Detail({ query }: any) {
  const movieid = useContext(MyIdContext);
  const [movieDetail, setMoviedetail] = useState<any>([]);
  const [load, setLoad] = useState(false);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const { loading, error, data } = useQuery(FAVO_LIST);
  const {data: session,status} =useSession();
  const [currentMovie, setMovie] = useState([]);
  console.log(data)

  useEffect(() => {
    
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
    setLoad(false);
    if (data) {
      setMovie(data.favos);
    }
  }, []);
  console.log(currentMovie)

 
  const togllebuton:any = currentMovie.filter(function(e:any){
    if(session)
    return e.userId === session.user.id
  })
  console.log(togllebuton)

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
        userId:session.user.id
      },
    });
    console.log("データベースに追加処理");
  };

  if (loading) {
    return <p>loding...</p>;
  } else if (error) {
    return <p>Error...</p>;
  } else {
  return (
    <div className="bg-black text-white pb-96">
      <div className="mx-24 ">
        <div>{movieDetail.title}</div>
        <div>
          <img
            src={IMG_PATH + movieDetail.backdrop_path}
            style={{ width: "100%", height: "60%" }}
          ></img>
        </div>
        <div>{movieDetail.overview}</div>
        <div>
          <span>
            <HomeOutlinedIcon color="error" />
          </span>

          <span>
            <LinkM href="http://localhost:3000/#" color="error">
              Back
            </LinkM>
          </span>
          <span>
            <div>
            <Button variant="contained" onClick={addFavolist}>
              AddFavo
            </Button></div>
            <div>
            <Button variant="contained" onClick={addFavolist}>
              AddFavo
            </Button></div>
          </span>
          
        </div>
      </div>
    </div>
  );
  }
}
