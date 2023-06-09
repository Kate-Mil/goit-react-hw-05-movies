import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/getMovie-api';
import Loader from 'components/Loader/Loader';
import ReviewsInfo from './ReviewsInfo';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getMovieReviews(movieId);
        setReview(data);
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
      <ReviewsInfo review={review} />
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};

export default Reviews;
