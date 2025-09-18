const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json({limit: '10mb'}));

const limiter = rateLimit({ windowMs: 1*60*1000, max: 100 });
app.use(limiter);

// Public routes
app.get('/api/health', (req, res) => res.json({status:'ok', time: new Date()}));

app.get('/api/services', async (req, res) => {
  const services = await db.all("SELECT * FROM services ORDER BY id");
  res.json(services);
});

app.post('/api/appointments', async (req, res) => {
  const {name, phone, email, date, time, service, notes} = req.body;
  if(!name || !phone || !date || !time) return res.status(400).json({error:'name, phone, date and time are required'});
  try {
    const stmt = await db.run(
      'INSERT INTO appointments (name, phone, email, date, time, service, notes, created_at) VALUES (?,?,?,?,?,?,?,datetime("now"))',
      [name,phone,email,date,time,service || '', notes || '']
    );
    res.json({success:true, id: stmt.lastID});
  } catch(err){
    console.error(err);
    res.status(500).json({error:'could not save appointment'});
  }
});

// simple admin auth (demo)
const ADMIN_TOKEN = 'changeme_admin_token'; // change in production
const requireAdmin = (req,res,next) => {
  const token = req.headers['x-admin-token'];
  if(token && token === ADMIN_TOKEN) return next();
  return res.status(401).json({error:'unauthorized'});
};

app.get('/api/admin/appointments', requireAdmin, async (req,res) => {
  const appts = await db.all("SELECT * FROM appointments ORDER BY id DESC");
  res.json(appts);
});

app.delete('/api/admin/appointments/:id', requireAdmin, async (req,res) => {
  const id = req.params.id;
  await db.run("DELETE FROM appointments WHERE id = ?", [id]);
  res.json({success:true});
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('Server running on', port);
});
