// import { getMovieById } from 'services/getMovie-api';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<div>Movies</div>} />
          <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
};

// const movieId = '755679';

// async function fetchData() {
//   try {
//     const data = await getMovieById(movieId);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchData();
