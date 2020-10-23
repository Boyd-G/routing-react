import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';
import PersonChild from './components/PersonChild';
import FilmChild from './components/FilmsChild'


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Fragment>
            <Link
              to="/"
              className="btn btn-primary mr-1">
              Go Home</Link>
            <Link
              to="/films"
              className="btn btn-primary mr-1">
              View Films</Link>
            <Link
              to="/people"
              className="btn btn-primary mr-1">
              View People</Link>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/films" component={Films} />
              <Route exact path="/people" component={People} />
              <Route path="/films/:id" component={FilmChild} />
              <Route path="/people/:id" component={PersonChild} />
            </Switch>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;