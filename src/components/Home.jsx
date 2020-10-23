import React from 'react';
import logo from '../images/logo.png';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <h1 className="col mb-2">Welcome to the (unofficial) Studio Ghibli Wiki!</h1>
        </div>
        <div className="row">
          <img className="col align-self-center" src={logo} alt="studio ghibli logo" />
        </div>
      </div>
    );
  }
}

export default Home;