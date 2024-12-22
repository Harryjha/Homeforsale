import { useContext, useState } from "react";
import { TbSmartHome } from "react-icons/tb";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlinePersonPinCircle } from "react-icons/md";
import {  Link } from "react-router-dom";
import "./navbar.scss"
import { AuthContext } from "../../context/AuthContext";



function Navbar(){
    const [open, setOpen] = useState(false);

    const{currentUser} =useContext(AuthContext)

    return(
        <nav >
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" className="img"/>
                    <span>HOME 
                        <br/>
                        Finder
                    </span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                {currentUser ? (<div className="user">
                    <img src={currentUser.avatar || "/noavatar.jpg"}
                    alt="" />
                    <span>{currentUser.username}</span>
                    <Link to ="/Profile" className="profile">
                        <div className="notification">3</div>
                        <span>Profile</span>
                    </Link>
                </div>) :( 
                <>
                <a href="/login">Sign in</a>
                <a href="/register" className="register">
                    Sign up
                    </a>
                    </>)}
                <div className="menuIcon">
                    <img src="menu.png" alt="" 
                    onClick={()=>setOpen((prev)=> !prev)}
                    
                    />
                </div>
             <div className={open ? "menu active":"menu"}>
                <a href="/">Home <TbSmartHome /></a>
                <a href="/">About
                <img src="/logo.png" alt="About" className="about-img" />
                    </a>
                <a href="/">Contact<MdOutlineContactSupport /></a>
                <a href="/">Agents<MdOutlinePersonPinCircle /></a> 
                <a href="/">Sign in</a>
                <a href="/">Sign up</a>
             </div>
            </div>
        </nav> 
    )
    }
    export default Navbar;