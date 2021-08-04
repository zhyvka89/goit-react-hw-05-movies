import { Link, useRouteMatch } from 'react-router-dom';

export default function MoviesList({ array }) {
  const { url } = useRouteMatch();

  return (
    <ul>
      {array.map(movie => (
        <li key={movie.id}>
          <Link to={`${url}movies/${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
}
