import { useEffect, useState } from 'react';
import * as moviesApi from '../../services/movies-api';

export default function Reviews({ movieId }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    moviesApi
      .fetchMovieReview(movieId)
      .then(({ results }) => setReview(results));
  }, [movieId]);

  return (
    <ul>
      {review.map(el => (
        <li key={el.id}>
          <h4>Author: {el.author}</h4>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
}
