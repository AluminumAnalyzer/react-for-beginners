// import Button from "./Button";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movies {loading ? null : movies.count}</h1>
      {loading ? <strong>Now Loading</strong> : null}
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImage={movie.medium_cover_image}
            genres={movie.genres}
            title={movie.title}
            summary={movie.summary}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
