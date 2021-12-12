import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  // console.log(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
  return (
    <div>
      <h1>Deatil</h1>
      <Link to="/">return to main</Link>
      <img src={movie.medium_cover_image} alt={movie.title}></img>
      <h2>{movie.title}</h2>
      <h2>{movie.genres}</h2>
      <h2>{movie.language}</h2>
      <h2>{movie.year}</h2>
      <h2>{movie.rating}</h2>
    </div>
  );
}

export default Detail;
