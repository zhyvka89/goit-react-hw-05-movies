import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import MoviesList from '../MoviesList';

export default function HomePageView() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      {movies && (
        // <ul>
        //   {movies.map(movie => (
        //     <li key={movie.id}>
        //       <Link to={`${url}movies/${movie.id}`}>{movie.original_title}</Link>
        //     </li>
        //   ))}
        // </ul>
        <MoviesList array={movies} />
      )}
    </>
  );
}
