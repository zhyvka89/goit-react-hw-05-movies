import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import * as moviesApi from '../../services/movies-api';

import styles from './Cast.module.scss';

export default function Cast({ movieId }) {
  const location = useLocation();
  console.log(location);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {cast.map(({ id, name, profile_path, character }) => {
        if (!profile_path) {
          return null;
        }
        return (
          <li className={styles.item} key={id}>
            <div className={styles.card}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt="cast"
              />
              <div className={styles.overlay}>
                <p className={styles.name}>{name}</p>
                <p className={styles.text}>{character}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
