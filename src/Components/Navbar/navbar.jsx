import React from 'react'
import logo from '../../assets/logo.png' // Adjust the path as necessary
export default function navbar() {
  return (
    <>
    <div className="drawer raleway ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar   fixed top-0 z-2 bg-black text-white">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
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
      <div className="mx-2 flex-1 px-2">
         <span 
        className=' text-2xl  md:text-4xl flex content-center items-center '> Sp<img data-aos="fade-down" data-aos-duration="1000"
         data-aos-delay="500"
         src={logo} className=' md:h-[70px] md:w-[70px] h-[50px] w-[50px] '    alt="logo"/>der</span> 
        </div>
      <div className="hidden flex-none lg:block ">
        <ul className="menu menu-horizontal bg-black text-white">
          {/* Navbar menu content here */}
          <li><a href="#" className='text-xl'>Home</a></li>
          <li><a href="#About" className='text-xl'>About</a></li>
          <li><a href="#services" className='text-xl'>Services</a></li>
          <li><a href="#clients" className='text-xl'>Clients</a></li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
    Content goes here
  </div>
  <div className="drawer-side z-10">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-black text-white min-h-full w-80 p-4  ">
      {/* Sidebar content here */}
    <li>
    <a href='#' className="text-md">
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
    <a className="text-md" href='#about'>
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
    <a className="text-md" href='#services'>
   <i className="fa-solid fa-server  fa-sm"></i>
  Services
    </a>
  </li>
  <li>
    <a className="text-md" href='#events'>
   <i className="fa-solid fa-users-between-lines fa-sm"></i>
Clients
    </a>
  </li>
  
    </ul>
  </div>
</div>
    </>
  )
}
