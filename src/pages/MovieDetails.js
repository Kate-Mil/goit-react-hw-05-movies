import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/getMovie-api';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Loader from 'components/Loader/Loader';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getMovieById(movieId);
        console.log(data);
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
      <GoBackBtn />
      {movie && <MovieInfo {...movie} />}
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};

export default MovieDetails;
