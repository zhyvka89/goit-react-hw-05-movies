import { useEffect, useState, lazy, Suspense } from 'react';
import {
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import * as moviesApi from '../../services/movies-api';
import Button from '../../components/Button/Button';
import MovieCard from '../../components/MovieCard/MovieCard';

import styles from './MovieDetailsView.module.scss';

const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

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
    <section className={styles.movie}>
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
    </section>
  );
}
