import React from 'react';
import CardBox from './components/cards/CardBox';
import {events} from './data/events';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <br/>
      <CardBox events={events}></CardBox>
    </div>
  );
}

export default App;
