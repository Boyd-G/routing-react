import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


class PeopleCard extends React.Component {
  render() {
    return (
      <div className="card" style={{ width: '54rem' }}>
        <Link to={`/people/${this.props.person.id}`}>{this.props.person.name}</Link>
        <div className="card-body">
          Age: {this.props.person.age}
        </div>
        <div className="card-body">
          Gender: {this.props.person.gender}
        </div>
        <div className="card-body">
          Eye Color: {this.props.person.eye_color}
        </div>
        <div className="card-body">
          Hair Color: {this.props.person.hair_color}
        </div>
      </div>
    )
  }
}

export default PeopleCard;