import { List, ReviewTitle } from './Reviews.styled';

export default function ReviewsInfo({ review }) {
  return (
    <List>
      {review.length > 0
        ? review.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <ReviewTitle>Author: {author}</ReviewTitle>
                <p>{content}</p>
              </li>
            );
          })
        : 'there is no reviews'}
    </List>
  );
}
