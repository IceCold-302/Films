import React, { Component, lazy, Suspense } from 'react';
import { Header, Loading } from './components';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFavoris } from './store/actions';
const LazyFilms = lazy(() => import(/* webpackCHunkName: "Films" */'./features/films'))
const LazyFavoris = lazy(() => import(/* webpackCHunkName: "Favoris" */'./features/favoris'))
class App extends Component {
  componentDidMount() {
    this.props.fetchFavoris();
  }
  render() {
    return (
        <div className="App d-flex flex-column">
          <Header />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/films" component={LazyFilms} />
              <Route path="/favoris" component={LazyFavoris} />
              <Redirect to="/films" />
            </Switch>
          </Suspense>
        </div>
    );
  }
}

export default connect(null, {fetchFavoris})(App);
