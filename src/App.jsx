import React, {Component} from 'react'

import {BrowserRouter as Router , Route} from 'react-router-dom' ; 
import './App.css';

import Home from './components/Home' ;
import About from './components/About';
import News from './components/News' ;

import Navbar from './components/CustomNavbar'


import {CustomNavbar} from './components/CustomNavbar';

function App() {
  return (

    <Router>
      <CustomNavbar/>
      
        <Route exact path ="/" component = {Home}/>
          <Route path ="/about" component= {About}/>
          <Route path = "/news" component = {News}/>
    
    </Router>
  );
}

export default App;





