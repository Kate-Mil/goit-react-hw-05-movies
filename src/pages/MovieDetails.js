import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieById } from '../services/getMovie-api';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Loader from 'components/Loader/Loader';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? { pathname: '/' });

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <>
      <GoBackBtn path={backLink.current} />
      {movie && <MovieInfo {...movie} />}
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};

export default MovieDetails;
