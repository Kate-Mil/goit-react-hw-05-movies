import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieByQueury } from 'services/getMovie-api';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { Container, Section } from 'components/Section.styled';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getMovieByQueury(query);
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, [query]);

  return (
    <Section>
      <Container>
        <SearchForm />
        {movies.length > 0 && <MoviesList movies={movies} />}
        {error && <p>{error.message}</p>}
        {isloading && <Loader />}
      </Container>
    </Section>
  );
};

export default Movies;
