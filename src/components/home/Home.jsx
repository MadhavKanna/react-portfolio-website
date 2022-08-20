import React from "react"; 
import Navbar from "../Navbar"; 
import Footer from "../Footer"; 
import Intro from "./Intro"; 
import Doings from "./Doings"; 
import {info, colors} from "../../info"; 


function Home(){
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

export default Home;