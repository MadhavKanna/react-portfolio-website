import React from 'react';
import Home from './home/Home';
import EducationSkills from './educationSkills/EducationSkills';
import Contact from "./contact/Contact";
import { BrowserRouter as Router, Routes, 
   Route, Navigate,} from "react-router-dom";

function App() {
   return (
      <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home/>} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/educationskills" element={<EducationSkills/>} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/contact" element={<Contact/>} />
            
          {/* If any route mismatches the upper 
          route endpoints then, Navigate triggers 
          and Navigates app to home component with to="/" */}
          <Navigate to="/" />
        </Routes>
      </Router>
    </>
  );
      
}


export default App;
