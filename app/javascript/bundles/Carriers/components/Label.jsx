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

            </div>
         </main>
      </>
   )
}

export default Label

{/* <h1>Tracking Code: {props.trackingCode}</h1> */ }