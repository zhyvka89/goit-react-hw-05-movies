import { useEffect, useState, lazy, Suspense } from 'react';
import {
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import * as moviesApi from '../../services/movies-api';
import Button from '../Button/Button';
import MovieCard from '../MovieCard/MovieCard';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export default function MovieDetailsView() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesApi.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBackBtn = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <Button title="Go Back" onBtnClick={handleGoBackBtn} />

      {movie && <MovieCard movie={movie} url={url} location={location} />}

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
