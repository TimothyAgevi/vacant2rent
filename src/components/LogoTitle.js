import React from 'react'
import logo from 'assets/images/logo-removebg.png'
// import '../components/Navbar/navbar.css'

function LogoTitle() {
  return (
    <div className="nav-bar-logo" style={{backgroundColor:"re", marginLeft:"0"}}> 
        <img src={logo} style={{height:"auto", maxWidth:"10em", width:"90%"}}/>
    </div>
  )
}
export default LogoTitle
