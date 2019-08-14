import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import News from './Components/News';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/news" component={News}/>
      </div>
    </Router>
  );
}

export default App;
