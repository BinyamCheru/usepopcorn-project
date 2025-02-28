import { useEffect, useState } from "react";

const KEY = "e015d40b";

const MovieDetail = ({ selectedId, onCloseMovie }) => {
  const [movie, setMovie] = useState({});

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  console.log(title, year)
  useEffect(() => {
    try {
      const getMovieDetail = async () => {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await response.json();
        setMovie(data);
      };
      getMovieDetail();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="detail">
      <button className="btn-close" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedId}{" "}
    </div>
  );
};
export default MovieDetail;
