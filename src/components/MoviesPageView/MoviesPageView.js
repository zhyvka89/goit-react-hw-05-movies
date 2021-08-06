import { useEffect, useState } from 'react';
import MovieSearchForm from '../MovieSearchForm';
import MoviesList from '../MoviesList';
import * as moviesApi from '../../services/movies-api';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

export default function MoviesPageView() {
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const { url } = useRouteMatch();
  const [query, setQuery] = useState('');
  const [moviesByQuery, setMoviesByQuery] = useState([]);

  useEffect(() => {
    if (query === '') return;
    // const savedQuery = new URLSearchParams(location.search).get('query') ?? query;
    // console.log(savedQuery);
    moviesApi.fetchMoviesByQuery(query).then(({ results }) => {
      setMoviesByQuery(results);
    });
  }, [query, location.search]);

  const onSubmitForm = query => {
    setQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <MovieSearchForm onSubmitForm={onSubmitForm} />
      <MoviesList array={moviesByQuery} url={url} location={location} />
    </>
  );
}
