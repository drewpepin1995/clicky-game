import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper.js"
import ScoreBoard from "./components/ScoreBoard/ScoreBoard.js"
import Jumbotron from "./components/Jumbotron/Jumbotron.js"
import './App.css';

function App() {
  return (
    <Wrapper>
      <Jumbotron />
      <ScoreBoard />
    </Wrapper>
  );
}

export default App;
