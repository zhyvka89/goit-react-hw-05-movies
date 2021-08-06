import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

export default function MoviesList({ array, url, location }) {
  return (
    <ol className={styles.list}>
      {array.map(({ id, original_title }) => (
        <li className={styles.item} key={id}>
          {url === '/' ? (
            <Link
              to={{
                pathname: `${url}movies/${id}`,
                state: { from: location },
              }}
              className={styles.link}
            >
              {original_title}
            </Link>
          ) : (
            <Link
              to={{
                pathname: `${url}/${id}`,
                state: { from: location },
              }}
              className={styles.link}
            >
              {original_title}
            </Link>
          )}
        </li>
      ))}
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
