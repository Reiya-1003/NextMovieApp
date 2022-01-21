import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Banner({topmovie}){
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
console.log(topmovie)

    function truncate(string,n){
       return string?.length > n ? string.substr(0, n -1) + '...' : string
    }


    return (
        <header className={styles.banner}
        style={{backgroundSize:"cover",
        backgroundPosition:"center center",
            backgroundImage:`url("${IMG_PATH}${topmovie.results[0].backdrop_path}")`}}
            >
            


          <div className={styles.banner_contents}>
              <h1 className={styles.banner_title}>{topmovie.results[0].title}</h1>
              <div className={styles.banner_buttons}>
                  <button className={styles.banner_button}>Play</button>
                  <button className={styles.banner_button}>My List</button>
              </div>
              <h1 className={styles.banner_description}>
                  {truncate( `${topmovie.results[0].overview}`,150)}</h1>
              
              
              </div>  

              <div className={styles.banner__fadeBottom}></div>
        </header>
    )
}


