import React from 'react'
import { Element } from 'react-scroll'
import eric from '../../../../assets/images/OyanadelEric';
import brendan from '../../../../assets/images/GeralskyBrendan';
import andres from '../../../../assets/images/UrdanetaAndres';

const Contact = () => {
   return (
      <Element name="landing-scroll-contact" className="element" >
         <section>
            <div className="landing-team">
               <div className="landing-contact-header">
                  <h1>Contact Us</h1>
               </div>
            </div>

            <div className="landing-team-pics-container">

               <div className="landing-pics-cards">
                  <div className="landing-card-member">
                     <img src={eric} className="eric" />
                     <div className="landing-card-name">
                        <h3>Eric Oyanadel</h3>
                     </div>
                  </div>


                  <div className="landing-card-member">
                     <img src={brendan} className="brendan" />
                     <div className="landing-card-name">
                        <h3>Brendan Guralsky</h3>
                     </div>
                  </div>

                  <div className="landing-card-member">
                     <img src={andres} className="andres" />
                     <div className="landing-card-name">
                        <h3>Andres Urdaneta</h3>
                     </div>
                  </div>
               </div>

            </div>

            <div className="landing-contact-form">
               <form
                  action="https://formspree.io/shipshipmia@gmail.com"
                  method="POST"
               >
                  <div className="landing-contact-wrapper-frominput">
                     <div className="form-input">
                        <label htmlFor="your-email">Name</label>
                        <input
                           id="contact-name"
                           type="text"
                           name="contact-name"
                           autoComplete="off"
                           placeholder="John Doe"
                        />
                     </div>

                     <div className="form-input">
                        <label htmlFor="contact-email">Email</label>
                        <input
                           id="contact-email"
                           type="text"
                           name="contact-email"
                           autoComplete="off"
                           placeholder="john@example.com"
                        />
                     </div>

                     <div className="form-input">
                        <textarea
                           id="contact-message"
                           name="contact-message"
                           cols="50"
                           rows="10"
                        >
                        </textarea>
                     </div>
                  </div>
                  <div className="landing-contact-buttons">
                     <button type="submit">Send</button>
                     <input type="reset" />
                  </div>
               </form>
            </div>
         </section>
      </Element>
   )
}

export default Contact