import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Services(){
  const [services, setServices] = useState([]);
  useEffect(()=>{ axios.get('/api/services').then(r=>setServices(r.data)).catch(()=>{}) },[]);
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Services</h2>
      <div className='grid md:grid-cols-2 gap-4'>
        {services.map(s => (
          <div key={s.id} className='card'>
            <h3 className='font-semibold'>{s.title}</h3>
            <p className='text-sm text-gray-600'>{s.description}</p>
            <div className='mt-2 text-blue-600'>{s.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
