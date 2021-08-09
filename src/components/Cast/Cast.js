import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as moviesApi from '../../services/movies-api';
import styles from './Cast.module.css';
import falsePic from '../../images/false.png';
import { useLocation } from 'react-router-dom';

export default function Cast({ movieId }) {
  const location = useLocation();
  console.log(location);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {cast.map(({ id, name, profile_path, character }) => (
        <li className={styles.item} key={id}>
          <div className={styles.card}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt=""
                width="150"
                height="200"
              />
            ) : (
              <img src={falsePic} alt="" width="150" height="200" />
            )}
            <p className={styles.name}>{name}</p>
            <p className={styles.text}>{character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
