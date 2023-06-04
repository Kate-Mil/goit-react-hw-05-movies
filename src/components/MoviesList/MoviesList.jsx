import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledLink, TrandingItem, TrandingList } from './MoviesList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <TrandingList>
      {movies &&
        movies.map(({ id, title }) => (
          <TrandingItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </StyledLink>
          </TrandingItem>
        ))}
    </TrandingList>
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
