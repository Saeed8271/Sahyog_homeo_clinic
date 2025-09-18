# Homeo Clinic — Full-stack Website (Demo)

This repository contains a full-stack demo website for a Homeopathy clinic:
- Backend: Node.js + Express + SQLite (API server)
- Frontend: React (Vite) + Tailwind CSS (responsive)

What you get:
- Home, About (doctor profile), Services, Book Appointment, Contact pages
- Appointment booking API (stores in SQLite)
- Simple admin endpoints to view/delete appointments (use header x-admin-token)

IMPORTANT:
- Replace placeholder doctor image at `frontend/public/images/doctor.jpg` with the actual photo supplied.
- Change `ADMIN_TOKEN` in `backend/server.js` before deploying.

Run backend:
1. cd backend
2. npm install
3. npm run start

Run frontend:
1. cd frontend
2. npm install
3. npm run dev

This project is a starting point. For production, add real authentication, HTTPS, rate-limited contact emailing, input sanitation, and deploy to a proper host.
