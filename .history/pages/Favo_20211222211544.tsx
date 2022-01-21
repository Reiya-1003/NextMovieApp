import Link from "next/link";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { FAVO_LIST, DELETE_FAVO } from "../graphql/querys/querys";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Favo() {
  const { loading, error, data } = useQuery(FAVO_LIST);
  const {data: session,status} =useSession();
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const [currentMovie, setMovie] = useState([]);
  console.log(FAVO_LIST);
  console.log(data);
  console.log(currentMovie);
  console.log(session)

  useEffect(() => {
    if (loading === false && data) {
      setMovie(data.favos);
    }
  }, [loading, data]);

  let cleanList:any = currentMovie.filter(function (x: any, i: any, self: any) {
    return (
      self.findIndex(function (y: any) {
        return x.movienumber === y.movienumber;
      }) === i
    );
  });

  let userlist:any =currentMovie.filter(function(e){
    return e.userId === session.user.id
  })
console.log(userlist)
console.log(cleanList)
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
      <>
        <div>ここにお気に入り
        
                { userlist.map((list: any, i: any) => {
                  return (
                    <div className="col s12 m6 l3" key={i}>
                      <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                          <Link href={`/details/${list.movienumber}`}>
                            <img
                              src={`${IMG_PATH}${list.img}`}
                              alt="card image"
                              style={{ width: "100px", height: "150px" }}
                            ></img>
                          </Link>
                        </div>
                        <div className="card-action">
                          <Button
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(list.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })
              }

{!session && <div>
      Not sign in 
      <button onClick={()=>signIn()}>Sign In</button>
      </div>}
      {session && <div>
      sign in as {session.user.email} 
      <button onClick={()=>signOut()}>Sign Out</button></div>}
           
        </div>
      </>
    );
  }
}
