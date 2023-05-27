import { useEffect } from 'react';
import { getTrendingMovie } from '../services/getMovie-api';

const Home = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTrendingMovie();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  });

  return (
    <ul>
      <li>ewew</li>
    </ul>
  );
};

export default Home;
