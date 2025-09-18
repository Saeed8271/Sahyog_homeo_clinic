import React, {useState} from 'react';
import axios from 'axios';

export default function Book(){
  const [form, setForm] = useState({name:'',phone:'',email:'',date:'',time:'',service:'',notes:''});
  const [status, setStatus] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try{
      const res = await axios.post('/api/appointments', form);
      if(res.data && res.data.success){
        setStatus('Appointment booked! ID: '+res.data.id);
        setForm({name:'',phone:'',email:'',date:'',time:'',service:'',notes:''});
      } else setStatus('Saved.');
    }catch(err){
      setStatus('Error booking appointment.');
    }
  };
  return (
    <div className='max-w-xl'>
      <h2 className='text-2xl font-bold mb-4'>Book an Appointment</h2>
      <form onSubmit={submit} className='space-y-3'>
        <input required placeholder='Full name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className='w-full p-2 border rounded' />
        <input required placeholder='Phone' value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className='w-full p-2 border rounded' />
        <input placeholder='Email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className='w-full p-2 border rounded' />
        <div className='grid grid-cols-2 gap-2'>
          <input required type='date' value={form.date} onChange={e=>setForm({...form,date:e.target.value})} className='p-2 border rounded' />
          <input required type='time' value={form.time} onChange={e=>setForm({...form,time:e.target.value})} className='p-2 border rounded' />
        </div>
        <input placeholder='Service (optional)' value={form.service} onChange={e=>setForm({...form,service:e.target.value})} className='w-full p-2 border rounded' />
        <textarea placeholder='Notes' value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} className='w-full p-2 border rounded' />
        <button className='bg-blue-600 text-white px-4 py-2 rounded'>Book</button>
      </form>
      <p className='mt-3 text-sm text-gray-600'>{status}</p>
    </div>
  );
}
