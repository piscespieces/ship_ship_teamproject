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
                           this is just a placeholder, we gotta add some information about how to actually build the packages...
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
                           this is just a placeholder, we gotta add some information about how to actually build the packages...
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
                           this is just a placeholder, we gotta add some information about how to actually build the packages...
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