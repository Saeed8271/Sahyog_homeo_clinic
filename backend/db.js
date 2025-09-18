const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

const dbPath = path.join(__dirname, 'data.db');

let dbPromise = open({ filename: dbPath, driver: sqlite3.Database });

async function init(){
  const db = await dbPromise;
  await db.exec(`CREATE TABLE IF NOT EXISTS appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT,
    email TEXT,
    date TEXT,
    time TEXT,
    service TEXT,
    notes TEXT,
    created_at TEXT
  )`);
  await db.exec(`CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    price TEXT
  )`);
  // seed services if empty
  const row = await db.get('SELECT COUNT(*) as c FROM services');
  if(row.c === 0){
    const services = [
      ['Skin Consultation','Diagnosis & treatment for skin conditions','Free'],
      ['Hair Treatment','Hair fall treatment & PRP consultation','Starting ₹800'],
      ['Homeopathy Consultation','Chronic & acute conditions','₹500'],
      ['Allergy Treatment','Personalized homeopathic treatment','₹700']
    ];
    for(const s of services){
      await db.run('INSERT INTO services (title,description,price) VALUES (?,?,?)', s);
    }
  }
}

init();

module.exports = dbPromise;
