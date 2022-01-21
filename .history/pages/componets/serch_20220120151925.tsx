import React,{useContext,useState} from 'react'
import Link from "next/link";
import { MySerchContext } from "../serchCotext";
import { MyIdContext } from "../IdContext";
import MuiPagination from "@material-ui/lab/Pagination";

function Serch() {
    const { serch, setSerch } = useContext(MySerchContext);
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
    const { movieid, setMovieid } = useContext(MyIdContext);
    let [pageLinks, setLinks]: any = useState([]);
    const [page, setPage] = useState(1); //ページの個数を保存するその数だけページングを作る
    const [searchMovies, setSearchmovies] = useState<any>([]);
    const handleChangePage = (
        event: React.ChangeEvent<unknown>,
        value: number
      ) => {
        event.preventDefault();
        const newValue = value;
        setPage(newValue);
    
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}&page=${newValue}`
        )
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            const newResult = data.results;
            setSearchmovies(newResult);
            console.log(searchMovies);
          });
      }; //ページ番号ごとの映画を表示するonChange
    console.log(serch)
   
    return (
        <div>
        {serch.map((post: any) => {
         return (
          <div
            key={post.id}
            className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"
          >
            <Link href={`/details/${post.id}`}>
              <img
                src={IMG_PATH + post.backdrop_path}
                style={{ width: "220px", height: "120px" }}
                onClick={() => {
                  setMovieid(post.id);
                }}
              ></img>
            </Link>
          </div>
         );
            })}
        
     
      
       <div>
       <MuiPagination
         count={pageLinks.length}
         page={page}
         variant="outlined"
         color="secondary"
         onChange={handleChangePage}
       />
     </div>
     </div>)
      
        
}

export default Serch
