import React from 'react'
import logo from '../assets/logo1.png'
import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
  return (
   <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-red-500 '>  
        <div>
            <img src={logo} alt="Logo" style={{width:'50px'}} />
        </div>

      {/* {menu} */}
        <div>
            <ul className='flex px-4 ml ' >
                <li className='px-4' >Home</li>
                <li className='px-4' >About</li>
                <li className='px-4' >Work</li>
                <li className='px-4' >Skills</li>
                <li className='px-4' >Contact</li>
            </ul>
        </div>

        {/* {humburger icon} */}
        <div className=''><FaBars/></div>
        {/* {close icon} */}
        <div className=''><FaTimes/></div>
         {/* {mobile menu} */}
         <div>
         <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
         </div>
         {/* {social icons} */}
  </div>
  )
}

export default Navbar