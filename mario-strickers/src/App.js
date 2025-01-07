import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Characters from './components/pages/Characters';
import Stats from './components/pages/Stats';
import Signup from './components/pages/Signup';
import LOGIN from './components/pages/LOGIN';


function App() {
  return (
    <>
      <Router>

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/characters" element={<Characters/>} />
            <Route path="/stats" element={<Stats/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<LOGIN/>} />

        </Routes>
      </Router>
    </>
    
  );
}

export default App;
