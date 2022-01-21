import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Banner(){
    return (
        <header className={styles.banner}
        style={{backgroundSize:"cover",
        backgroundPosition:"center center",
            backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`}}
            >
            


          <div className={styles.banner_contents}>
              <h1 className={styles.banner_title}>Movie title</h1>
              <div className={styles.banner_buttons}>
                  <button className={styles.banner_button}>Play</button>
                  <button className={styles.banner_button}>My List</button>
              </div>
              <h1 className={styles.banner_description}>this is description</h1>
              </div>  

              <div className={styles.banner__fadeBottom}></div>
        </header>
    )
}


