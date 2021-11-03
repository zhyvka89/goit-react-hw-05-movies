import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';

const HomePageView = lazy(() => import('./views/HomePageView/HomePageView'));
const MovieDetailsView = lazy(() =>
  import('./views/MovieDetailsView/MovieDetailsView'),
);
const MoviesPageView = lazy(() =>
  import('./views/MoviesPageView/MoviesPageView'),
);

export default function App() {
  return (
    <>
      <AppBar />
      <Container>
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
    </>
  );
}
