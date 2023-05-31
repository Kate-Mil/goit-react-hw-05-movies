import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

const MovieInfo = ({
  poster_path,
  original_title,
  overview,
  genres,
  release_date,
  vote_average,
}) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <h1>
        {original_title} {release_date}
      </h1>
      <p>User Score: {vote_average * 10}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>genres</h2>
      {genres.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            {' '}
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieInfo;

MovieInfo.propTypes = {
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};
