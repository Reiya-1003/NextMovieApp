import Link from "next/link";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { FAVO_LIST, DELETE_FAVO } from "../graphql/querys/querys";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Favo() {
  const { loading, error, data } = useQuery(FAVO_LIST);
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280"; //映画の画像のパスに使う
  const [currentMovie, setMovie] = useState([]);
  console.log(FAVO_LIST);
  console.log(data);
  console.log(currentMovie);

  useEffect(() => {
    if (loading === false && data) {
      setMovie(data.favos);
    }
  }, [loading, data]);

  let cleanList = currentMovie.filter(function (x: any, i: any, self: any) {
    return (
      self.findIndex(function (y: any) {
        return x.movienumber === y.movienumber;
      }) === i
    );
  });

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
        <div>ここにお気に入り</div>
        <div>
          <div className="row" style={{ margin: "0" }}>
            <div
              className="col s12"
              style={{ marginTop: "30px", marginBottom: "30px" }}
            >
              {cleanList.length === 0 ? (
                <div style={{ color: "white", paddingBottom: "2000px" }}>
                  Not Favolist
                </div>
              ) : (
                cleanList.map((list: any, i: any) => {
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
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
