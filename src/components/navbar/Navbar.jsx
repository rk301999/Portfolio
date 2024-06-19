import React, { useState } from 'react'
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  function toggleMenu(){
    console.log("Ritesh");
    let items = document.querySelector(".items")
    let itemsList = document.querySelector(".itemsList")
  }
  return (
    <div className="navbar flex justify-center h-[80px] ">
      <div className="navbarcontainer  max-w-[1024px] flex items-center justify-between w-screen">
        
        <div className="items w-full">
            <ul className={toggle?' itemslist flex  text-white gap-16 text-xl justify-center':"itemslist flex  text-white gap-16 text-xl justify-center max-h-0"}>
                <Link to={"/"}><li className='flex gap-2 items-center transform transition duration-500 hover:scale-125' ><AiOutlineHome/>Home</li></Link>
                <Link to={"about"}><li  className='flex gap-2 items-center transform transition duration-500 hover:scale-125' ><AiOutlineUser/>About</li></Link>
                <Link to={"project"}><li  className='flex gap-2 items-center transform transition duration-500 hover:scale-125'><AiOutlineFundProjectionScreen/>Projects</li></Link>
                {/* <li  className='flex gap-2 items-center'><CgFileDocument/>Resume</li> */}
                <a href="https://medium.com/@rk301999" target='_blank'><li  className='flex gap-2 items-center transform transition duration-500 hover:scale-125'><ImBlog/>Blogs</li></a>
            </ul>
        </div>
        <div className='hamburger' onClick={()=>setToggle(!toggle)}>
        <HiOutlineAdjustmentsHorizontal/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
