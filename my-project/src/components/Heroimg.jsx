import "./HeroimgStyle.css";

import React from 'react' 

import IntroImg from "../assets/intro.png"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div>
      <div className="hero">
        <div className="mask">
         <img className="intro-png" src={IntroImg }  alt="intro"/>
        </div>
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
         
        <div className="btn-container">
        <Link to="/project" className="btn">Projects</Link>
         <Link to="/contact" className="btn btn-light">Contact</Link>
       </div>
      </div>
   
      <div>
      </div> 
    </div>
  )
}
export default Heroimg