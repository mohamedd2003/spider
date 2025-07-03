import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-main/80 to-[#0e2e2b] px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-main mb-4 drop-shadow-lg">404</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-lg text-white/80 mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full bg-white text-main font-bold shadow-md hover:bg-main hover:text-white border-2 border-main transition-all duration-200"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
} 