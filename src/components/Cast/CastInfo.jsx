import defaultPhoto from '../../pictures/defaultPhoto.jpg';

export default function CastInfo({ cast }) {
  return (
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
                  <img src={defaultPhoto} width="200" alt={name} />
                )}

                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })
        : 'there is no cast information'}
    </ul>
  );
}
