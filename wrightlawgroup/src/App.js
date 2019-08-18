import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import CustomNavbar from './Components/CustomNavbar';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/contact" component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
