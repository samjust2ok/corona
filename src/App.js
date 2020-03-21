import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Navigation';

const App = () => (
  <Router>
    <Header />
  </Router>
);
export default App;
