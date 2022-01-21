import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Banner(){
    return (
        <header className={styles.banner}
        style={{backgroundSize:"cover",
        backgroundPosition:"center center",
            backgroundImage:`url("https://netflix-fan.jp/wp-content/uploads/2018/03/84c8b20cbe82ae073d347d9a248f04de13281645.jpg")`}}
            >
            


          <div className={styles.banner_contents}>
              <h1 className={styles.banner_title}>Movie title</h1>
              <div className={styles.banner_buttons}>
                  <button>Play</button>
                  <button>My List</button>
              </div>
              <h1 className={styles.banner_description}>this is description</h1>
              </div>  

              <div className={styles.banner--fadeBottom}></div>
        </header>
    )
}


