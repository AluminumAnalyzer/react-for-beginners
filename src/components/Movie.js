import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import "../components/Movie.css";

function Movie({ id, coverImage, title, summary, genres, year }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: "/movie-detail",
          state: { year, title, summary, coverImage, genres },
        }}
      >
        <img src={coverImage} alt={title} />
        <div className="movie__data">
          <h3 className="movie__title">
            <Link to={`/movie/${id}`}>{title}</Link>
          </h3>
          <h5 className="movie__year">{year}</h5>
          <p>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
          <ul className="movie__genres">
            {genres.map((g, index) => (
              <li key={index}>{g}</li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  coverImage: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
  year: Proptypes.number.isRequired,
};

export default Movie;
