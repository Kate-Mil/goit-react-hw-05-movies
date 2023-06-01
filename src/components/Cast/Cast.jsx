import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/getMovie-api';
import Loader from 'components/Loader/Loader';

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
        console.log(data);
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
      <ul>
        {cast
          ? cast.map(({ profile_path, id, name, character }) => {
              return (
                <li key={id}>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : `N/A`
                    }
                    alt={name}
                  />
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </li>
              );
            })
          : 'there is no reviews'}
      </ul>
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};

export default Cast;
