export default function ReviewsInfo({ review }) {
  return (
    <ul>
      {review.length > 0
        ? review.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        : 'there is no reviews'}
    </ul>
  );
}
