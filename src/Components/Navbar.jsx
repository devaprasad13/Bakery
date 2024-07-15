
import React, { useState } from 'react'
import './Navbar.css'
import Landingpage from './Landingpage';
import rro from '../Image/logo.png'
import rq from '../Image/bek.png'
export default function Navbar() {
     
       const[open,SetOpen] = useState(false);
      const hamburg = ()=>
        {
            SetOpen(!open);
        }
  return (
      <>
      <div className='op'>

      
       <nav>
           <div className='logo'>
                <img src={rq} ></img>
           </div>
            
            <ul className={open?'show':''}>
                <li><a a href="">Home</a></li>
                 <li><a href="#ui">About</a></li>
                 <li><a href="#yo">Service</a></li>
                 <li><a href="">Blog</a></li>
                
            </ul>
            <div className="menu" onClick={hamburg}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
        </nav>

        </div>
      </>
   
       
        
    

  )
}
