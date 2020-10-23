import React from 'react';
import PeopleCard from './PeopleCard'

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
    }
  }
  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/people')
      .then(res => res.json())
      .then(obj => this.setState({ people: obj }));
  }
  render() {
    return (
      this.state.people.map((person) => {
        return <PeopleCard key={person.id} person={person} />
      })
    )
  }
}

export default People;