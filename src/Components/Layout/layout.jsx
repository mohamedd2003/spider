import React from 'react'
import Navbar from '../Navbar/navbar.jsx'
import Footer from '../Footer/footer.jsx'
import { Outlet } from 'react-router-dom'
export default function layout() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
}
