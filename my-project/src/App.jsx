

import './App.css'
import Navbar from './components/navbar'
import {  Route, Routes } from "react-router-dom";
import Layout from './layout/Layout'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skill from './pages/Skill';
import About from './pages/About';

function App() {
  

  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/About" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App
