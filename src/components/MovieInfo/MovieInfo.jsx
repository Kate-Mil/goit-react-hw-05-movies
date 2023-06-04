import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import formatDate from '../../helpers/formatDate';
import {
  AddInfoItem,
  AddInfoList,
  AdditionalInfoBlock,
  ContainerWrapper,
  GenresList,
  MainInfoBlock,
  StyledLink,
} from './MovieInfo.styled';

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
      <ContainerWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <MainInfoBlock>
          <h1>
            {original_title} ({formatDate(release_date)})
          </h1>
          <p>User Score: {vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <GenresList>
            {genres.map(item => (
              <li key={item.id}>
                <p>{item.name}</p>
              </li>
            ))}
          </GenresList>
        </MainInfoBlock>
      </ContainerWrapper>
      <AdditionalInfoBlock>
        <h2>Additional information</h2>
        <AddInfoList>
          <AddInfoItem>
            <StyledLink to="cast">Cast</StyledLink>
          </AddInfoItem>
          <AddInfoItem>
            {' '}
            <StyledLink to="reviews">Reviews</StyledLink>
          </AddInfoItem>
        </AddInfoList>
        <Outlet />
      </AdditionalInfoBlock>
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
