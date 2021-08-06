import { useEffect, useState, lazy, Suspense } from 'react';
import {
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
// import { NavLink } from "react-router-dom";
import * as moviesApi from '../../services/movies-api';
import MovieCard from '../MovieCard/MovieCard';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function MovieDetailsView() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBackBtn = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <button type="button" onClick={handleGoBackBtn}>
        Go Back
      </button>
      {movie && <MovieCard movie={movie} url={url} />}

      <Suspense>
        <Route path="/movies/:movieId/cast">
          <Cast movieId={movieId} />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
