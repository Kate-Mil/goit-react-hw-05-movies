import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
axios.defaults.headers.common[
  'Authorization'
] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDQxY2JiMGFmY2MyZWRjM2ViMWZhMzYwN2I2ZDRhMCIsInN1YiI6IjY0NzBhZjlkNzcwNzAwMDEzNjdmMWQ4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EE0tnKUREICKhNtzOvKI7FH43kPF1_Kyf67JRodAVlc`;
const API_KEY = `2041cbb0afcc2edc3eb1fa3607b6d4a0`;

export const getTrendingMovie = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieByQueury = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};

export const getMovieById = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
