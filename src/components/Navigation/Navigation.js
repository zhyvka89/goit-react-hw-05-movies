import { NavLink } from 'react-router-dom';
import Container from '../Container';
import styles from './Navigation.module.scss';

export default function Navigation() {
  return (
    <Container>
      <nav>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Search
        </NavLink>
      </nav>
    </Container>
  );
}
