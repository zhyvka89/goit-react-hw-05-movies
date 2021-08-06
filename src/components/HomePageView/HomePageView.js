import { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import MoviesList from '../MoviesList';

export default function HomePageView() {
  const { url } = useRouteMatch();
  const location = useLocation();
  console.log(location);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>{movies && <MoviesList array={movies} url={url} location={location} />}</>
  );
}
