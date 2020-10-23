import React from 'react';
import FilmCard from './FilmCard';

class Films extends React.Component {
  constructor() {
    super();
    this.state = {
      films: [],
    }
  }
  componentDidMount() {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(res => res.json())
      .then(obj => this.setState({ films: obj }));
  }
  render() {
    return (
      this.state.films.map((film) => {
        return <FilmCard key={film.id} film={film} />
      })
    )
  }
}

export default Films;