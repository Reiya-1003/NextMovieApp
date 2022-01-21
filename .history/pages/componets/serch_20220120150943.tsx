import React,{useContext} from 'react'
import Link from "next/link";
import { MySerchContext } from "../serchCotext";
import { MyIdContext } from "../IdContext";
import MuiPagination from "@material-ui/lab/Pagination";

function Serch() {
    const { serch, setSerch } = useContext(MySerchContext);
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
    const { movieid, setMovieid } = useContext(MyIdContext);
    console.log(serch)
    return serch.map((post: any) => {
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
      });
        
}

export default Serch
