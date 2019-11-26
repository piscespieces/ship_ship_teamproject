import React from 'react'

const Hero = () => {
   return (
      <div className="landing-hero-container">
         <div className="landing-hero-header">
            <h1>SHIPSHIP</h1>
         </div>
         <div className="landing-logo-container">
            <div className="landing-left-logo-side">
               <div className="landing-p-container">
                  <p>
                     Let us help you find the best shipping options for any and all needs...
                  </p>
               </div>
            </div>
            <div className="landing-center-logo">
               <div id="landing-logo"></div>
            </div>
            <div className="landing-right-logo-side">
            </div>
         </div>
         <div id="landing-hooray">
            <h1>...HOORAY!</h1>
         </div>
      </div>
   )
}

export default Hero