import React from 'react'
import { useSpring, animated } from 'react-spring'
import { Link } from 'react-scroll'

const SideBar = () => {
   const props = useSpring({ config: { duration: 1250 }, opacity: 1, from: { opacity: 0 } })
   return (
      <animated.div style={props}>
         <div className="landing-sidebar">
            <ul className="landing-sidebar-options">
               <li>
                  <a href="/users/sign_in">Login</a>
               </li>
               <li>
                  <a href="/users/sign_up">SignUp</a>
               </li>
               <li>
                  <a href="/dashboard">Dashboard</a>
               </li>
               <li>
                  <Link
                     activeClass="active"
                     to="home"
                     spy={true}
                     smooth={true}
                     duration={500}
                  >
                     Home
                  </Link>
               </li>
               <li>
                  <Link
                     activeClass="active"
                     to="landing-scroll-howwework"
                     spy={true}
                     smooth={true}
                     duration={500}
                  >
                     How We Work?
                  </Link>
               </li>
               <li>
                  <Link
                     activeClass="active"
                     to="landing-scroll-contact"
                     spy={true}
                     smooth={true}
                     duration={500}
                  >
                     Contact Us!
                  </Link>
               </li>
            </ul>
            <div className="landing-ship-it">
               <h1 id="sidebar-shipit"><a href="/parcels/new">SHIP IT!</a></h1>
            </div>
         </div>
      </animated.div>
   )
}

export default SideBar