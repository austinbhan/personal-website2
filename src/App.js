import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
// import Home from "./pages/Home";
// import News from "./pages/News";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
