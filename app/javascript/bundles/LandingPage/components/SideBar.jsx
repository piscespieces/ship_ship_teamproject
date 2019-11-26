import React from 'react'

const SideBar = () => {
   return (
      <div class="landing-sidebar">
         <ul class="landing-sidebar-options">
            <li><a href="/users/sign_in">Login</a></li>
            <li><a href="/users/sign_up">SignUp</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
         </ul>
         <div class="landing-ship-it">
            <h1><a href="/parcels/new">SHIP IT!</a></h1>
         </div>
      </div>
   )
}

export default SideBar