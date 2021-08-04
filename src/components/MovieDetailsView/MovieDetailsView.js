import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  useEffect(() => {
    moviesApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);
  return (
    <>
      {movie && (
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>{movie.original_title}</h2>
            <p>User Score {movie.vote_average}</p>
            <h3>Owerview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
              {movie.genres.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
