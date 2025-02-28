import { useState } from "react";
import { tempMovieData } from "./components/data";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar movies={movies} />
      <Main movies={movies} />
    </>
  );
}
