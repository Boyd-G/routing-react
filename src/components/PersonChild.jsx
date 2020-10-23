import React from 'react';
import PeopleCard from './PeopleCard';


class PersonChild extends React.Component {
  constructor() {
    super();
    this.state = {
      person: ''
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params
    fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
      .then(res => res.json())
      .then(obj => this.setState({ person: obj }));
  }
  render() {
    return (
      <PeopleCard key={this.props.match.id} person={this.state.person} />
    )
  }
}

export default PersonChild;
