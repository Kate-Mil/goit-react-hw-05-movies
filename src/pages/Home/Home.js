import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../../services/getMovie-api';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { Container, Section } from 'components/Section.styled';
import { Title } from './Home.styled';

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
    <Section>
      <Container>
        <Title>Trending today</Title>

        <MoviesList movies={movies} />
        {error && <p>{error.message}</p>}
        {isloading && <Loader />}
      </Container>
    </Section>
  );
};

export default Home;
