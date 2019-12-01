import React from 'react'

const Label = props => {
   return (
      <>
         <div className="label-navbar-grid">
            <div className="label-navbar-leftgrid">
               <h1>Verify Info</h1>
            </div>
            <div className="label-navbar-rightgrid">

            </div>
         </div>
         <main id="label-main">
            <div className="label-leftside">
               <img id="label-postagelabel" src={props.postageLabel} alt="label" />
            </div>
            <div className="label-rightside">
               <ul className="label-ul">
                  <li>
                     <a href="">
                        Email
                     </a>
                  </li>
                  <li>
                     <a href="">
                        Download
                     </a>
                  </li>
                  <li>
                     <a href="">
                        Print
                     </a>
                  </li>
                  <li>
                     <a href="">
                        Save
                     </a>
                  </li>
                  <li>
                     <a href={'/dashboard' || '/'}>
                        DONE!
                     </a>
                  </li>
                  <li>
                     <a href="">
                        CREATE NEW!
                     </a>
                  </li>
               </ul>
            </div>
         </main>
      </>
   )
}

export default Label

{/* <h1>Tracking Code: {props.trackingCode}</h1> */ }