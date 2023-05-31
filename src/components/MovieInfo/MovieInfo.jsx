const MovieInfo = ({
  poster_path,
  original_title,
  overview,
  genres,
  release_date,
  vote_average,
}) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
      />
      <h1>
        {original_title} {release_date}
      </h1>
      <p>User Score: {vote_average * 10}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>genres</h2>
      {genres.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
};

export default MovieInfo;
