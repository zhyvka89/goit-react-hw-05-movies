import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as moviesApi from '../../services/movies-api';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <p>{name}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt=""
            width="150"
            height="200"
          />
          <p>{character}</p>
        </li>
      ))}
    </ul>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
