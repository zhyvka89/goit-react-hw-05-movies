import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import MoviesList from '../MoviesList';

export default function HomePageView() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return <>{movies && <MoviesList array={movies} url={url} />}</>;
}
