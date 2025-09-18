import React from 'react';

export default function About(){
  return (
    <div className='space-y-4'>
      <div className='card flex flex-col md:flex-row gap-4 items-center'>
        <img src='/images/doctor.jpg' alt='Doctor' className='w-48 h-48 object-cover rounded' />
        <div>
          <h2 className='text-2xl font-bold'>Dr. MS Hoda</h2>
          <p className='text-gray-600'>Experienced Homeopathy doctor with 14+ years experience, two clinics in Patna. Specialises in skin & hair treatment. Awards from international conferences.</p>
          <ul className='mt-3 text-gray-600 list-disc ml-5'>
            <li>Over 14 years experience</li>
            <li>2 clinics in Patna</li>
            <li>Specialist in skin & hair</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className='text-xl font-semibold'>Education & Awards</h3>
        <p className='text-gray-600'>Multiple certificates and awards from Dubai, Thailand, and more.</p>
      </div>
    </div>
  );
}
