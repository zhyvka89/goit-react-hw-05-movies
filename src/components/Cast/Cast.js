import { useEffect, useState } from 'react';
import * as moviesApi from '../../services/movies-api';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul>
      {cast.map(el => (
        <li key={el.id}>
          <p>{el.name}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
            alt=""
            width="150"
            height="200"
          />
          <p>{el.character}</p>
        </li>
      ))}
    </ul>
  );
}
