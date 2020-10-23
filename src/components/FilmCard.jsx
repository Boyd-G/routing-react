import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


class FilmCard extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: '54rem' }}>
        <Link to={`/films/${this.props.film.id}`}>{this.props.film.title}</Link>
        <div className="card-body">
          {this.props.film.description}
        </div>
      </div>
    )
  }
}

export default FilmCard;
