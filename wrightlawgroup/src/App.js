import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CustomNavbar from './Components/CustomNavbar';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Disclaimer from './Components/Disclaimer';
import PrivacyPolicy from './Components/PrivacyPolicy';
import CustomFooterNavbar from './Components/CustomFooterNavbar';

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
        <Route path="/contact" component={Disclaimer}/>
        <Route path="/contact" component={PrivacyPolicy}/>
        <CustomFooterNavbar />
      </div>
    </Router>
  );
}

export default App;
