import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie, url, location }) {
  const {
    backdrop_path,
    original_title,
    vote_average,
    overview,
    genres,
    release_date,
    poster_path,
  } = movie;

  return (
    <div className={`${styles.movieCard} ${styles.bright}`}>
      <div className={styles.infoSection}>
        <div className={styles.movieHeader}>
          <img
            className={styles.image}
            src={
              backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                : `https://image.tmdb.org/t/p/w500/${poster_path}`
            }
            alt="movie"
          />
          <h1 className={styles.titleOne}>{original_title}</h1>
          <h4 className={styles.titleFour}>{release_date}</h4>
          <span
            className={vote_average > 5.5 ? styles.highVote : styles.lowVote}
          >
            {vote_average}
          </span>
          <ul className={styles.type}>
            {genres.map(({ id, name }) => (
              <li className={styles.typeItem} key={id}>
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.movieDesc}>
          <p className={styles.text}>{overview}</p>
        </div>
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
      </div>
      <div className={`${styles.blurBack} ${styles.brightBack}`}></div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
};
