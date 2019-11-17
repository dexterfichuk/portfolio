import React from 'react';
import CardBox from './components/cards/CardBox';
import Heading from './components/headings/Heading';
import {events} from './data/events';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <br/>
      <Heading text={'Dexter Fichuk'}></Heading>

      <Heading text={'Speaking'}></Heading>
      <CardBox events={events}></CardBox>
          </div>
  );
}

export default App;
