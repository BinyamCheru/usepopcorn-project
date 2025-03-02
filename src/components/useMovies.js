import { useState, useEffect } from "react";

const KEY = "e015d40b";

export const useMovies = (query) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("Something went wrong!");

        const data = await response.json();

        if (data.Response === "False") throw new Error("Movie not found");
        console.log(data.Search);
        setMovies(data.Search);
        setError("");
      } catch (error) {
        if (error.message !== "AbortError") {
          setError(error.message);
        }
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
};
