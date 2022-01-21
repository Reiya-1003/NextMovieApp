import React from 'react'

function serch() {
    const [searchMovies, setSearchmovies] = useState<any>([]);
    return searchMovies.map((post: any) => {
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

export default serch
