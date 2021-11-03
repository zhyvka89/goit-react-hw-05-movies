import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

export default function MoviesList({ array, url, location }) {
  return (
    <ol className={styles.list}>
      {array.map(
        ({ id, release_date, poster_path, vote_average, backdrop_path }) => (
          <li className={styles.item} key={id}>
            {url === '/' ? (
              <Link
                to={{
                  pathname: `${url}movies/${id}`,
                  state: { from: location },
                }}
                className={styles.link}
              >
                <div className={styles.thumb}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    }
                    alt="movie"
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.title}>{release_date}</span>
                    <br />
                    <span
                      className={
                        vote_average > 5.5 ? styles.rateHigh : styles.rateLow
                      }
                    >
                      {vote_average}
                    </span>
                  </div>
                </div>
              </Link>
            ) : (
              <Link
                to={{
                  pathname: `${url}/${id}`,
                  state: { from: location },
                }}
                className={styles.link}
              >
                <div className={styles.thumb}>
                  <img
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    }
                    alt="movie"
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.title}>{release_date}</span>
                    <br />
                    <span
                      className={
                        vote_average > 5.5 ? styles.rateHigh : styles.rateLow
                      }
                    >
                      {vote_average}
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </li>
        ),
      )}
    </ol>
  );
}

MoviesList.propTypes = {
  url: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }),
  ),
};
