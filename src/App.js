<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> f378117ea08f911f82cae92847b6502642da2624

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> f378117ea08f911f82cae92847b6502642da2624
    </div>
  );
}

export default App;
