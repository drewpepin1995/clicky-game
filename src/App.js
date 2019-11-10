import React from 'react';
import ScoreBoard from "./components/ScoreBoard/ScoreBoard.js"
import Jumbotron from "./components/Jumbotron/Jumbotron.js"
import Footer from "./components/Footer/Footer.js"
import './App.css';

function App() {
  return (
    <div className="container-fluid mainContainer">
      <Jumbotron />
      <ScoreBoard />
      <Footer />
    </div>
  );
}

export default App;
