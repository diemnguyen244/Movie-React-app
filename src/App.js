import { useEffect, useState } from "react";
import MovieCart from "./MovieCart";

import "./App.css";
import SearchIcon from "./search.svg";

function App() {
  const [movies, setMovies] = useState([]);
  const [seachTerm, setSeachTerm] = useState("");
  const API_URL = "http://www.omdbapi.com?apikey=fce3a303";
  const searchMovies = async (title) => {
    const respone = await fetch(`${API_URL}&s={title}`);
    const data = await respone.json();
    setMovies(data.Search);
  };
  const movie1 = {
    Title: "Spider-Man Title Reveal",
    Year: "2021",
    imdbID: "tt14122734",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjRjMmQ2NDQtNmI5NC00N2EwLTkwYWQtOTM2OGZjMmI5YmRjXkEyXkFqcGdeQXVyMTI0NTA1MDI3._V1_SX300.jpg",
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    //fce3a303
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          value={seachTerm}
          onChange={(e) => setSeachTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="seach"
          onClick={() => searchMovies(seachTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCart movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>no movie</h2>
        </div>
      )}
    </div>
  );
}

export default App;
