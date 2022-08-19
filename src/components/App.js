import React from 'react';
import Navbar from "./Navbar"; 
import Intro from "./home/Intro"; 
import Doings from "./home/Doings"; 
import {info, colors} from "../info.js"; 
import Footer from "./Footer"; 

function App() {
   return (
      <div>
         <Navbar />
         <Intro /> 
         <Doings 
         data={info["doings"]} 
         // key={info["doings"].name}
         />
         <Footer />
      </div>
   );
}


export default App;
