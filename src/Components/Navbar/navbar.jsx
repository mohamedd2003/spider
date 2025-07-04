import React from 'react'
import logo from '../../assets/logo.png' // Adjust the path as necessary
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <>
    <div className="drawer raleway   z-50  ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar   fixed top-0 z-2 bg-gradient-to-br  from-[rgba(0,0,0,0.5)] to-[#0c3e36] text-white">
 
      <div className="mx-2 flex-1 px-2  ">
         <a href='/#' 
        className=' text-2xl  md:text-4xl flex content-center items-center '> <img data-aos="fade-down" data-aos-duration="1000"
         data-aos-delay="500"
         src={logo} className=' md:h-[70px] md:w-[70px] h-[50px] w-[50px] '    alt="logo"/></a> 
        </div>
        <div className="flex-none lg:hidden ">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="hidden flex-none lg:block  ">
        <ul className="menu menu-horizontal  text-white">
          {/* Navbar menu content here */}
          <li><a href="/#" className='text-xl hover:text-[#125e51] hover:duration-500 
          hover:border hover:rounded-full   ease-in-out hover:all transition-all hover:text-2xl'>Home</a></li>
          <li><a href="/#About" className='text-xl hover:text-[#125e51] hover:duration-500 
          hover:border hover:rounded-full   ease-in-out hover:all transition-all hover:text-2xl'>About</a></li>
          <li><a href="/#services" className='text-xl hover:text-[#125e51] hover:duration-500 
          hover:border hover:rounded-full   ease-in-out hover:all transition-all hover:text-2xl'>Services</a></li>
          <li><a href="/#ourwork" className='text-xl hover:text-[#125e51] hover:duration-500 
          hover:border hover:rounded-full   ease-in-out hover:all transition-all hover:text-2xl'>Our Work</a></li>
          <li><a href="/#clients" className='text-xl hover:text-[#125e51] hover:duration-500 
          hover:border hover:rounded-full   ease-in-out hover:all transition-all hover:text-2xl'>Clients</a></li>
          <li><a href="/#contact" className='text-xl hover:text-[#125e51] hover:duration-500 
          hover:border hover:rounded-full   ease-in-out hover:all transition-all hover:text-2xl'>Contact</a></li>
        </ul>
      </div>
    </div>
   
    
  </div>
  <div className="drawer-side z-10 ">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay "></label>
    <ul className="menu bg-black text-white min-h-full w-80 p-4  ">
      {/* Sidebar content here */}
    <li>
    <a href='/#' className="text-lg" onClick={() => { document.getElementById('my-drawer-3').checked = false; }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
     Home
    </a>
  </li>
  <li>
    
    <a className="text-lg" href='/#about' onClick={() => { document.getElementById('my-drawer-3').checked = false; }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    About
    </a>
  </li>
  <li>
    <a className="text-lg" href='/#services' onClick={() => { document.getElementById('my-drawer-3').checked = false; }}>
   <i className="fa-solid fa-server  fa-sm"></i>
  Services
    </a>
  </li>
  <li>
    <a className="text-lg" href='/#ourwork' onClick={() => { document.getElementById('my-drawer-3').checked = false; }}>
   <i className="fa-solid fa-briefcase fa-sm"></i>
Our Work
    </a>
  </li>
  <li>
    <a className="text-lg" href='/#clients' onClick={() => { document.getElementById('my-drawer-3').checked = false; }}>
   <i className="fa-solid fa-users-between-lines fa-sm"></i>
Clients
    </a>
  </li>
  <li>
    <a className="text-lg" href='/#contact' onClick={() => { document.getElementById('my-drawer-3').checked = false; }}>
   <i className="fa-solid fa-users-between-lines fa-sm"></i>
Contact 
    </a>
  </li>
  
    </ul>
  </div>
</div>
    </>
  )
}
