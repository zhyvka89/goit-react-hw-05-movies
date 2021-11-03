import { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import MoviesList from '../../components/MoviesList';

import styles from './HomePageView.module.css';

export default function HomePageView() {
  const { url } = useRouteMatch();
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <section className={styles.home}>
      {movies && <MoviesList array={movies} url={url} location={location} />}
    </section>
  );
}
