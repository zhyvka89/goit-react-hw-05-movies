import { useEffect, useState } from 'react';
import MovieSearchForm from '../MovieSearchForm';
import MoviesList from '../MoviesList';
import * as moviesApi from '../../services/movies-api';

export default function MoviesPageView() {
  const [query, setQuery] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  useEffect(() => {
    if (query === '') return;
    moviesApi.fetchMoviesByQuery(query).then(({ results }) => {
      setMoviesByQuery(results);
    });
  });

  const onSubmitForm = query => {
    setQuery(query);
  };

  return (
    <>
      <MovieSearchForm onSubmitForm={onSubmitForm} />
      <MoviesList array={moviesByQuery} />
    </>
  );
}
