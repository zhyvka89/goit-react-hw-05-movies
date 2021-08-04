import { Link } from 'react-router-dom';

export default function MoviesList({ array, url }) {
  return (
    <ul>
      {array.map(movie => (
        <li key={movie.id}>
          {url === '/' ? (
            <Link to={`${url}movies/${movie.id}`}>{movie.original_title}</Link>
          ) : (
            <Link to={`${url}/${movie.id}`}>{movie.original_title}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
