import React, { useEffect } from 'react';
import './App.scss';   // 👈 changed from App.scss to App.scss

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

import api from "./api/client";   // 👈 import Axios client

function App() {
  // 👇 Axios test
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get("/budget");
        console.log("✅ Axios test response:", res.data);
      } catch (err) {
        console.error("❌ Axios test error:", err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
