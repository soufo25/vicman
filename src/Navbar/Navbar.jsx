import React, {useState} from 'react';
import  "./Navbar.css";
import {Link} from "react-router-dom"

function Navbar() {
  
    const [menu , setMenu] = useState (false)
  

    const  mobileHandler= (e) =>{
            setMenu(!menu)
    };

  return (
      <nav>
      <div className="logo">
      <h1>CashAfloat</h1>
      </div>
      <div >
        <ul className ={menu? "hide-nav": "nav-items"}>
            <Link to= "/" className='active' >
            <li >Home</li>
            </Link>
            <Link to= "/about" >
            <li>About</li>
            </Link>
            <Link to= "/services">
            <li >Services</li>
            </Link>
            <Link to= "/contacts" >
            <li >Contacts</li>
            </Link>
            <Link to= "/feedback" >
            <li >Feedback</li>
            </Link>
          </ul>
          <div className='mobile' onClick={mobileHandler}>
                {menu === true ? (<i className="fas fa-bars"></i>):
                 (<i className="fas fa-times"></i>)}
            </div>
    </div>
    </nav>
  )
}

export default Navbar;
