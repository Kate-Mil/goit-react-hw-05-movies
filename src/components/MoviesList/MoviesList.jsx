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
