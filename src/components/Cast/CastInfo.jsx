import defaultPhoto from '../../pictures/defaultPhoto.jpg';
import { CastTitle, Img, List } from './CastInfo.styled';

export default function CastInfo({ cast }) {
  return (
    <List>
      {cast.length > 0
        ? cast.map(({ profile_path, id, name, character }) => {
            return (
              <li key={id}>
                <Img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : defaultPhoto
                  }
                  alt={name}
                />

                <CastTitle>{name}</CastTitle>
                <p>Character: {character}</p>
              </li>
            );
          })
        : 'there is no cast information'}
    </List>
  );
}
