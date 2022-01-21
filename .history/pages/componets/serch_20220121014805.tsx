import React,{useContext,useState,useEffect} from 'react'
import Link from "next/link";
import { MySerchContext } from "../serchCotext";
import { MyIdContext } from "../IdContext";
import { MyWordContext } from "../serchCotext";

import styles from "../../styles/Home.module.css";


function Serch() {
    const { serch, setSerch } = useContext(MySerchContext);
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
    const { movieid, setMovieid } = useContext(MyIdContext);
    let [pageLinks, setLinks]: any = useState([]);
    const [page, setPage] = useState(1); //ページの個数を保存するその数だけページングを作る
    const [searchMovies, setSearchmovies] = useState<any>([]);
    const {searchTerm, setSearchterm} = useContext<any>(MyWordContext)
    const [pageNum,setPageNum]=useState([])

    console.log(serch.total_pages)
   
    // const pageN = ()=>{
      let newLinks:any = [];
      const numV = (e:any)=>{
        console.log(e.currentTarget.id)
        const newPage= e.currentTarget.id
        setPageNum(newPage)
        
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}&page=${newPage}`
        )
          .then((data) => data.json())
          .then((data) => {
            console.log(data);
            const newResult = data
            setSerch(newResult);
            console.log(serch);
          });
     }
      
      for (let i = 0; i < serch.total_pages; i++){
        newLinks.push(i+1);
        //[1,2,3,4]ができる
      }
      console.log(newLinks)
      const pageN =newLinks.map((num:any,i:number)=>{
        return(
          
          <button id={num} onClick={numV}><li key={i}className={styles.page}>{num}</li></button>
        
        )
      })
 
     
      
    

　　
console.log(pageNum)
    console.log(serch)
    console.log(searchTerm)
   
   
    console.log(page)
   
    
    if(serch.results === undefined ){
          return(
                 <div></div>
             ); 
            }else{
            return(
              <div>
                <h2 className={styles.kekka}>検索結果：作品数 {serch.total_results}作品　 </h2>
                <div className={styles.pageblock}
                      style={{marginBottom:"20px"}}>
                          
                      <ul className={styles.pagination}>
                          <li>«</li>
                             {pageN}
                           <li>»</li>
                           <li style={{color:"gray",fontSize:"12px"}}>Page:{pageNum}</li>
                        </ul>
                  </div>
                <div　className={styles.searchCon}>

                {serch.results.map((post: any) => {
                        return (
                         <div
                           key={post.id}
                           className={styles.searchCon__item}
                         >
                            
                           <Link href={`/details/${post.id}`}>
                             
                             <img
                               src={IMG_PATH + post.poster_path}
                               onClick={() => {
                                 setMovieid(post.id);
                               }}
                             ></img>
                             {/* <div className={styles.searchCon__mask}>
                              <div className={styles.searchCon__caption}>{post.title}</div>
                             </div> */}
                           </Link>
                            </div>
                  )})}

                  </div>
                  <div className={styles.pageblock}>
                          
                      <ul className={styles.pagination}>
                          <li>«</li>
                             {pageN}
                           <li>»</li>
                           <li style={{color:"gray",fontSize:"12px"}}>Page:{pageNum}</li>
                        </ul>
                  </div>
              </div>)}
       
      
        
}

export default Serch
