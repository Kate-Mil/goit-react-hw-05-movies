import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/getMovie-api';
import Loader from 'components/Loader/Loader';
import defaultPhoto from '../../pictures/defaultPhoto.jpg';

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
      <ul>
        {cast.length > 0
          ? cast.map(({ profile_path, id, name, character }) => {
              return (
                <li key={id}>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                      alt={name}
                    />
                  ) : (
                    <img src={defaultPhoto} alt={name} />
                  )}

                  <p>{name}</p>
                  <p>Character: {character}</p>
                </li>
              );
            })
          : 'there is no cast information'}
      </ul>
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};

export default Cast;
