import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../services/getMovie-api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getTrendingMovie();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      <MoviesList movies={movies} />
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};

export default Home;
