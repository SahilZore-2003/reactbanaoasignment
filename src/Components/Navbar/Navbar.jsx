import React,{useState} from 'react'
import "./Navbar.scss"
import logo_img from "../../assets/logo.png"
import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
   const [shownav,setShownav] = useState(false)
  return (
    <nav>
     <div className="logo-container">
        <img src={logo_img} alt="" />
        <div>
            <h1>Banao</h1>
            <p>Technologies</p>
        </div>
     </div>
     <div className={shownav?"mobilenav activenav":"mobilenav"}>
     <div className="searchbox">
        <IoSearchSharp />
        <input type="search" placeholder='Search your favourite group in Banao tech.' />
     </div>
     <p>
        Create account.<a className='mainlink' href="#">it's free <IoMdArrowDropdown /> </a> 
        <div className="dropdown">
            <a href="">Login</a>
            <a href="">Signup</a>
        </div>
     </p>
     </div>
     
     <FaBarsStaggered onClick={()=>setShownav(!shownav)} className='navicon' />
    </nav>
  )
}

export default Navbar
