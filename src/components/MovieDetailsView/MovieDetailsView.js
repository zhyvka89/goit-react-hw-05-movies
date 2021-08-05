import { useEffect, useState } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
// import { NavLink } from "react-router-dom";
import * as moviesApi from '../../services/movies-api';
import Cast from '../Cast/Cast';
import MovieCard from '../MovieCard/MovieCard';
import Reviews from '../Reviews/Reviews';

export default function MovieDetailsView() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  useEffect(() => {
    moviesApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  console.log(movie);
  return (
    <>
      {movie && <MovieCard movie={movie} url={url} />}

      {/* <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to={`${url}/${movie.id}`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/${movie.id}`}>Rewiews</NavLink>
        </li>
      </ul> */}

      <Route path="/movies/:movieId/cast">
        <Cast movieId={movieId} />
      </Route>

      <Route path="/movies/:movieId/reviews">
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
}
