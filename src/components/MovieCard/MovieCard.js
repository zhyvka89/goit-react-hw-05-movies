import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie, url }) {
  const { backdrop_path, original_title, vote_average, overview, genres } =
    movie;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.thumb}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt="movie"
          />
        </div>
        <div>
          <h2>{original_title}</h2>
          <p>User Score {vote_average}</p>
          <h3>Owerview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
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

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
