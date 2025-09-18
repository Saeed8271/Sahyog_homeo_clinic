import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Admin(){
  const [token, setToken] = useState('');
  const [appts, setAppts] = useState([]);
  const fetch = async () => {
    try{
      const res = await axios.get('/api/admin/appointments', { headers: { 'x-admin-token': token }});
      setAppts(res.data);
    }catch(err){
      setAppts([]);
    }
  };
  useEffect(()=>{ if(token) fetch() },[token]);
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Admin — Appointments</h2>
      <div className='mb-3'>
        <input placeholder='Admin token' value={token} onChange={e=>setToken(e.target.value)} className='p-2 border rounded' />
        <button onClick={fetch} className='ml-2 bg-blue-600 text-white px-3 py-1 rounded'>Load</button>
      </div>
      <div className='space-y-2'>
        {appts.map(a=>(
          <div key={a.id} className='card flex justify-between items-center'>
            <div>
              <div className='font-semibold'>{a.name} — {a.phone}</div>
              <div className='text-sm text-gray-600'>{a.date} {a.time} | {a.service}</div>
            </div>
            <button onClick={async ()=>{ await axios.delete('/api/admin/appointments/'+a.id, { headers:{'x-admin-token':token} }); fetch(); }} className='text-red-600'>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
