Frontend: React 
Backend: Node.js (Express) 
Cloud: Azure 
Database: MongoDB 
Extras: TailwindCSS for styling, JWT for authentication, Cloudinary for image uploads




paw-haven/
├─ backend/
│ ├─ package.json
│ ├─ server.js
│ ├─ .env.example
│ ├─ src/
│ │ ├─ config/
│ │ │ └─ db.js
│ │ ├─ models/
│ │ │ ├─ User.js
│ │ │ ├─ Animal.js
│ │ │ ├─ Adoption.js
│ │ │ ├─ Donation.js
│ │ │ └─ Volunteer.js
│ │ ├─ routes/
│ │ │ ├─ auth.js
│ │ │ ├─ animals.js
│ │ │ ├─ adoptions.js
│ │ │ ├─ donations.js
│ │ │ └─ volunteers.js
│ │ ├─ controllers/
│ │ ├─ middleware/
│ │ │ ├─ auth.js
│ │ │ └─ errorHandler.js
│ │ └─ utils/
│ │ └─ cloudinary.js
│ └─ scripts/
│ └─ seed.js
└─ frontend/
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ src/
│ ├─ index.jsx
│ ├─ App.jsx
│ ├─ pages/
│ │ ├─ Home.jsx
│ │ ├─ Animal.jsx
│ │ ├─ Admin.jsx
│ │ ├─ Login.jsx
│ │ └─ Volunteer.jsx
│ ├─ components/
│ │ ├─ AnimalCard.jsx
│ │ ├─ AnimalForm.jsx
│ │ ├─ Navbar.jsx
│ │ └─ DashboardStats.jsx
│ └─ services/
│ ├─ api.js
│ └─ auth.js
└─ public/
└─ index.html