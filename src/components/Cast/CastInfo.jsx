import defaultPhoto from '../../pictures/defaultPhoto.jpg';
import { CastTitle, Img, List } from './CastInfo.styled';

export default function CastInfo({ cast }) {
  return (
    <List>
      {cast.length > 0
        ? cast.map(({ profile_path, id, name, character }) => {
            return (
              <li key={id}>
                {profile_path ? (
                  <Img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <Img src={defaultPhoto} width="200" alt={name} />
                )}

                <CastTitle>{name}</CastTitle>
                <p>Character: {character}</p>
              </li>
            );
          })
        : 'there is no cast information'}
    </List>
  );
}
