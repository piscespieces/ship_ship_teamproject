import React from 'react'
import { Element } from 'react-scroll'
import LogoGirl from './LandingLogos/LogoGirl'
import LogoMan from './LandingLogos/LogoMan'
import LogoBox from './LandingLogos/LogoBox'

const Info = () => {
   return (
      <>
         <Element name="landing-scroll-howwework" className="element" >
            <section>
               <div className="landing-info-container">
                  <div className="landing-info-header">
                     <h1>How we work...</h1>
                  </div>

                  {/* INFO SECTION */}

                  <div className="landing-cards-container">

                     {/* CARD 1 */}

                     <div className="landing-card">
                        <div className="landing-card-header">
                           <p>Build your packages</p>
                        </div>
                        <div className="landing-card-logo">
                           <div className="landing-logogirl-container">
                              <LogoBox />
                           </div>
                        </div>
                        <p className="landing-card-footer">
                        The shipship enterprise is proud to present our interactive three dimensional package builder. It was created with the mindset that the package label industry should be fun and easy!
                     </p>
                     </div>

                     {/* CARD 2 */}

                     <div className="landing-card">
                        <div className="landing-card-header">
                           <p>Give us your info</p>
                        </div>
                        <div className="landing-card-logo">
                           <div className="landing-logogirl-container">
                              <LogoGirl />
                           </div>
                        </div>
                        <p className="landing-card-footer">
                        After using our package builder you will be prompted to give a To and From address which we’ll use to find your carrier options!
                     </p>
                     </div>

                     {/* CARD 3 */}

                     <div className="landing-card">
                        <div className="landing-card-header">
                           <p>Compare prices!</p>
                        </div>
                        <div className="landing-card-logo">
                           <div className="landing-logogirl-container">
                              <LogoMan />
                           </div>
                        </div>
                        <p className="landing-card-footer">
                        The best part is that we provide all of the competitors prices in one place. Once you make your selection a new label will be provided to you. If popularity rises, maybe we’ll provide a competitive market for cheaper shipping!!!!!!!!!!!!!!!
                        </p>
                     </div>
                  </div>
               </div>
            </section>
         </Element>
      </>
   )
}

export default Info