import styles from "../../styles/Home.module.css";
import { useState, useEffect, useContext ,MouseEvent} from "react";
import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import { MySerchContext, MyWordContext } from "../serchCotext";
import { useRouter } from "next/router";

export default function Navber() {
  const { searchTerm, setSearchterm } = useContext(MyWordContext);
  const { serch, setSerch } = useContext(MySerchContext);
  let [pageLinks, setLinks]: any = useState([]);
  const router = useRouter(); //useRouterフックを定義して
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 200) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  //デザインに使う
  const { data: session, status } = useSession();
  console.log(session);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=78eb03987f34d05d918381d81d8257fe&language=ja-JA&page=1&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        const newResult = data;
        console.log(newResult);
        setSerch(newResult);
        console.log(serch);

        let newLinks = [];

        for (let i = 0; i < data.total_pages; i++) {
          newLinks.push(i + 1);
        }

        setLinks(newLinks);
        router.push("/serch");
        console.log(pageLinks);
        console.log(data.total_pages);
      });
  }; //検索するときのonSbmit
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const newSerch = e.currentTarget.value;
    console.log(newSerch);
    setSearchterm(newSerch);
    console.log(searchTerm);
  };

  return (
    <div className={`${styles.nav} ${show && styles.nav__black}`}>
      <div className={styles.nav__contents}>
        <div className={styles.nav__logo}>
          <a href="http://localhost:3000/" className={styles.nav__title}>
            MOVIEFLIX
          </a>

          {(() => {
            if (session) {
              return (
                <Link href={`/Favo`}>
                  <span className={styles.nav__list}>マイリスト</span>
                </Link>
              );
            } else {
              return <span className={styles.nav__list}></span>;
            }
          })()}

          <span className={styles.nav__serch}>
            <form action="" className={styles.nav__serchbox}>
              <input
                placeholder="Serch Movie"
                type="text"
                className={styles.nav__serchicon}
                onChange={handleChange}
              />

              <button
                value="検索"
                onClick={handleSubmit}
                style={{ marginLeft: "1%" }}
              >
                検索
              </button>
            </form>
          </span>
        </div>
      </div>

      <span className={styles.nav__login}>
        {!session && (
          <div className={styles.nav__list}>
            <button onClick={() => signIn()} style={{ marginRight: "-50px" }}>
              Sign In
            </button>
          </div>
        )}
        {session && (
          <div
            style={{
              display: "flex",
              backgroundColor: "transparent",
              fontSize: "small",
            }}
          >
            <div className={styles.nav__list}>{session.user.name}</div>
            <div style={{ backgroundColor: "transparent" }}>
              <button
                onClick={() => signOut()}
                style={{ color: "gray", backgroundColor: "transparent" }}
              >
                {" "}
                Sign Out
              </button>
            </div>
          </div>
        )}
      </span>
    </div>
  );
}
