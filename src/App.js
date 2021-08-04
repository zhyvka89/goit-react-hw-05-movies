import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import HomePageView from './components/HomePageView';
import MovieDetailsView from './components/MovieDetailsView';
import MoviesPageView from './components/MoviesPageView';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePageView />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>
        <Route path="/movies" exect>
          <MoviesPageView />
        </Route>
      </Switch>
    </Container>
  );
}
