import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from "./Pages/Home";
import News from "./Pages/News";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
