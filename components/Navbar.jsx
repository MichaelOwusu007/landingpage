"use client"

import React, { useState } from 'react';
import "@/styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <div>
    <div className='navbar-container w-full sm:fixed top-0 z-10 px-4 h-20 mx-auto justify-between items-center flex sm:px-5 md:px-10 lg:px-16 xl:px-20 '>
      <div className='logo'>
        <h1 className='nav-logo font-bold text-white text-[24px] lg:text-[36px]'>get<span className=' text-pink-400'>linked</span></h1>
      </div>

      {/* Toggle button for mobile screens */}
      <div className='toggle-button sm:hidden text-white cursor-pointer' onClick={toggleNavLinks}>
        {showNavLinks ? <IoMdClose className='icon absolute right-[260px] top-5 h-7 w-7 border rounded border-pink-500' /> : <FaBars className='icon relative h-7 w-7' />}
      </div>

      {/* Navlinks container */}
      {showNavLinks && (
        <div className=' sm:hidden nav-links-mobile transition-all duration-300 ease-in z-10'>
          <nav className=' mobile-nav flex flex-col space-y-6 absolute top-4 right-0 py-6 pl-6 pr-4 font-sans font-bold text-lg bg-[#150e28]  text-white mt-10 w-[300px]'>
            <a href="#">Timeline</a>
            <hr />
            <a href="#">Overview</a>
            <hr />
            <a href="#">FAQs</a>
            <hr />
            <a href="#">Contact</a>
          <a href=""><button className='bg-primary-gradient w-[200px] items-center rounded-md justify-center active:scale-95 h-[50px] flex '><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md'>Register</div></button></a>
          </nav>
        </div>
      )}

      {/* Desktop Navlinks */}
      <div className='nav-links hidden sm:flex'>
        <nav className='flex font-sans font-bold text-lg text-white space-x-8 md:space-x-12 lg:space-x-14 justify-center items-center'>
          <Link href="/">Timeline</Link>
          <Link href="About">Overview</Link>
          <Link href="#">FAQs</Link>
          <Link href="Contact">Contact</Link>
          <a href=""><button className='bg-primary-gradient w-[200px] items-center rounded-md justify-center active:scale-95 h-[50px] flex '><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md'>Register</div></button></a>
        </nav>
      </div>
      </div>
      <div>
        <img src="img/line-1.png" alt="" />
      </div>
    </div>
  );
}

export default Navbar;