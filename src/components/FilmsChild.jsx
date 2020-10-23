import React from 'react';
import FilmCard from './FilmCard'


class FilmsChild extends React.Component {
  constructor() {
    super();
    this.state = {
      film: ''
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then(res => res.json())
      .then(obj => this.setState({ film: obj }));
  }
  render() {
    return (
      <FilmCard key={this.props.match.id} film={this.state.film} />
    )
  }
}

export default FilmsChild;