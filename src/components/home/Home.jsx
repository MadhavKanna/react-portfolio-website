import React from "react";  
import Intro from "./Intro"; 
import Doings from "./Doings"; 
import {info, colors} from "../../info"; 


function Home(){
    return (
        <div>
         
         <Intro /> 
         <Doings 
         data={info["doings"]} 
         // key={info["doings"].name}
         />
         
      </div>
    );
}

export default Home;