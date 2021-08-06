import { Link } from 'react-router-dom';

export default function MoviesList({ array, url, location }) {
  return (
    <ul>
      {array.map(movie => (
        <li key={movie.id}>
          {url === '/' ? (
            <Link
              to={{
                pathname: `${url}movies/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.original_title}
            </Link>
          ) : (
            <Link
              to={{
                pathname: `${url}/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.original_title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
