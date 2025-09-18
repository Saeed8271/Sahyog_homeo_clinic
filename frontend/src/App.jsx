import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

export default function App(){
  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white shadow'>
        <div className='max-w-5xl mx-auto flex items-center justify-between p-4'>
          <div>
            <h1 className='text-xl font-bold'>Homeo Clinic</h1>
            <p className='text-sm text-gray-500'>Gentle, effective homeopathy</p>
          </div>
          <nav className='space-x-4'>
            <Link to='/' className='text-gray-700 hover:text-blue-600'>Home</Link>
            <Link to='/about' className='text-gray-700 hover:text-blue-600'>About</Link>
            <Link to='/services' className='text-gray-700 hover:text-blue-600'>Services</Link>
            <Link to='/book' className='text-gray-700 hover:text-blue-600'>Book</Link>
            <Link to='/contact' className='text-gray-700 hover:text-blue-600'>Contact</Link>
            <Link to='/admin' className='text-gray-700 hover:text-blue-600'>Admin</Link>
          </nav>
        </div>
      </header>

      <main className='max-w-5xl mx-auto p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/book' element={<Book />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </main>

      <footer className='mt-8 bg-white border-t'>
        <div className='max-w-5xl mx-auto p-4 text-sm text-gray-600'>
          © Homeo Clinic — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
