import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies &&
        movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
    </ul>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
