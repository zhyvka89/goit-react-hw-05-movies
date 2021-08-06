import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
// import HomePageView from './components/HomePageView';
// import MovieDetailsView from './components/MovieDetailsView';
// import MoviesPageView from './components/MoviesPageView';

const HomePageView = lazy(() =>
  import('./components/HomePageView/HomePageView'),
);
const MovieDetailsView = lazy(() =>
  import('./components/MovieDetailsView/MovieDetailsView'),
);
const MoviesPageView = lazy(() =>
  import('./components/MoviesPageView/MoviesPageView'),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Container>
  );
}
