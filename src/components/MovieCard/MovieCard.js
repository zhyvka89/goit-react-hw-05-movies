import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';
import falsePic from '../../images/false.png';

export default function MovieCard({ movie, url, location }) {
  const { backdrop_path, original_title, vote_average, overview, genres } =
    movie;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.thumb}>
          {backdrop_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
              alt="movie"
            />
          ) : (
            <img src={falsePic} alt="movie" />
          )}
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{original_title}</h2>
          <p>
            User Score <span className={styles.score}>{vote_average}</span>
          </p>
          <h3 className={styles.title}>Owerview</h3>
          <p>{overview}</p>
          <h3 className={styles.title}>Genres</h3>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <h3 className={styles.add}>Additional information</h3>
      <ul className={styles.navList}>
        <li>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to={{
              pathname: `${url}/cast`,
              state: { from: location?.state?.from },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to={{
              pathname: `${url}/reviews`,
              state: { from: location?.state?.from },
            }}
          >
            Rewiews
          </NavLink>
        </li>
      </ul>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
