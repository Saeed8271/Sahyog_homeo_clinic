import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <div className='space-y-6'>
      <section className='grid md:grid-cols-2 gap-6 items-center'>
        <div>
          <h2 className='text-3xl font-bold'>Welcome to Homeo Clinic</h2>
          <p className='mt-2 text-gray-600'>Experienced homeopathic care for skin, hair, and chronic conditions. Gentle, personalized treatment plans.</p>
          <div className='mt-4'>
            <Link to='/book' className='inline-block bg-blue-600 text-white px-4 py-2 rounded'>Book Appointment</Link>
            <Link to='/contact' className='ml-3 text-blue-600'>Contact Us</Link>
          </div>
        </div>
        <div className='card'>
          <img src='/images/doctor.jpg' alt='Doctor' className='w-full h-64 object-cover rounded' />
          <h3 className='mt-3 font-semibold'>Dr. [Name] — MD (Homeopathy)</h3>
          <p className='text-sm text-gray-500'>14+ years experience. Specialized in skin & hair treatments.</p>
        </div>
      </section>

      <section>
        <h3 className='text-2xl font-semibold'>Why choose us?</h3>
        <ul className='mt-3 space-y-2 text-gray-600'>
          <li>Personalized treatment plans</li>
          <li>Non-invasive, natural remedies</li>
          <li>Online & offline consultation</li>
        </ul>
      </section>
    </div>
  );
}
