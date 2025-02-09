import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className={`w-full min-h-screen ${theme === 'dark' ? 'bg-[#202C37] text-white' : 'bg-[#FFFFFF] text-black'}`}>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/details/:countryName" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
