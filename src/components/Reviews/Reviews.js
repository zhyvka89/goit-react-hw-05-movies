import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
      {review.map(({ id, author, content }) => (
        <li key={id}>
          <h4>Author: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
