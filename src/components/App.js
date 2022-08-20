import React from 'react';
import Home from './home/Home';
import EducationSkills from './educationSkills/EducationSkills';
import Contact from "./contact/Contact";
import Projects from "./projects/Projects"; 

import Footer from "./Footer"; 
import Navbar from "./Navbar"; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
   return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} /> 
      <Route path="/educationskills" element={<EducationSkills/>} />
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<Contact />} /> 
      <Route path="*" element={<h1>Error Page not found 404</h1>} />
    </Routes>
    <Footer /> 
  </Router>
  
  );
      
}


export default App;
