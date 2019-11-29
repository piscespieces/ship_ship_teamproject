import React from 'react'
import { Element } from 'react-scroll'
import TypeWritter from './TypeWritter'
import logo from '../../../../assets/images/shipship_logo_2';

const Hero = () => {
   return (
      <Element name="home" className="element" >
         <div className="landing-hero-container">
            <div className="landing-hero-header">
               <h1>SHIPSHIP</h1>
            </div>
            <div className="landing-logo-container">
               <div className="landing-left-logo-side">
                  <div className="landing-p-container">
                     <TypeWritter />
                  </div>
               </div>
               <div className="landing-center-logo">
                  <div id="landing-logo">
                     <img className="landing-logo-imgtag" src={logo} />
                  </div>
               </div>
               <div className="landing-right-logo-side">
               </div>
            </div>
            <div id="landing-hooray">
               <h1>...HOORAY!</h1>
            </div>
         </div>
      </Element>
   )
}

export default Hero