import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/getMovie-api';
import Loader from 'components/Loader/Loader';
import CastInfo from './CastInfo';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getMovieCredits(movieId);
        setCast(data);
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
      <CastInfo cast={cast} />
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};

export default Cast;
