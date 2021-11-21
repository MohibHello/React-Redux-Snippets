import React from 'react';
import './App.css';
import Home from './components/Home';
import {IpAddr} from './components/Jokes';

//Render Redux Cycle into App
function App(props) {
  return (
    <div className="App">
     <Home/>
     <IpAddr/>
    </div>
  );
};

export default App;
