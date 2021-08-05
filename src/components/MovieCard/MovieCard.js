import { NavLink } from 'react-router-dom';

export default function MovieCard({ movie, url }) {
  return (
    <>
      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="movie"
          />
        </div>
        <div>
          <h2>{movie.original_title}</h2>
          <p>User Score {movie.vote_average}</p>
          <h3>Owerview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(el => (
              <li key={el.id}>{el.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Rewiews</NavLink>
        </li>
      </ul>
    </>
  );
}
