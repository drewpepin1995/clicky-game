import React from 'react';
import './Jumbotron.css';

class Jumbotron extends React.Component {
    render() {
      return (
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center">
            <h1 className="display-4">NHL Clicks!</h1>
            <p className="lead">
              Click on any team to earn points, but click on a team more than
              once and you lose!
            </p>
          </div>
        </div>
      );
    }
  }
  
  export default Jumbotron;