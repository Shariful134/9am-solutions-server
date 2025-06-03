🚀 MERN Auth App – Frontend (React + Vite)
This is the frontend of the MERN Stack Authentication & Authorization project. It includes user registration, login, profile dashboard, and dynamic subdomain-based shop dashboards — built with React, Vite, and Redux Toolkit.

🌐 Live Demo
🔗 Live Frontend URL
🔗 Live Backend URL

Replace with your actual hosted URLs

✅ Features
👤 User Authentication
User Signup with:

Username

Password (min 8 chars, 1 number, 1 special character)

3–4 unique shop names

Shop name validation: globally unique

Login with "Remember Me" option

If checked: 7-day session

Else: 30-minute session

Session stored via HTTP-only cookies

🧑‍💻 Dashboard (Profile Feature)
Displays username and list of user’s shops

Logout with confirmation popup

Navigation sidebar with user avatar

🏪 Dynamic Subdomain-based Shop Dashboard
Clicking a shop opens:

cpp
Copy
Edit
http://<shopname>.localhost:5173
Example:

arduino
Copy
Edit
http://beautyhub.localhost:5173
Each subdomain shows:

arduino
Copy
Edit
"This is beautyhub shop"
Cross-subdomain authentication via cookie & Redux token sync

Spinner shown while verifying token on subdomains

If token is invalid or missing: shows “Unauthorized”

⚙️ Setup Instructions
1️⃣ Install Dependencies
bash
Copy
Edit
cd client
npm install
2️⃣ Create .env File
Create a .env file in client/ based on .env.example.

Example .env
env
Copy
Edit
VITE_API_BASE_URL=http://localhost:5000/api/v1
3️⃣ Run Development Server
bash
Copy
Edit
npm run dev
If using subdomains on localhost, be sure to update your system's hosts file:

🧠 Add to your hosts file:
Copy
Edit
127.0.0.1 beautyhub.localhost
127.0.0.1 grocerypoint.localhost
🛡️ Tech Stack
Technology	Description
React	Frontend framework
Vite	Build tool and dev server
TypeScript	Strong typing
Redux Toolkit	Global state management
React Router	Routing and navigation
JWT	Token-based auth
HTTP-only Cookies	Secure token storage
Lucide Icons	Icon components

🧪 Testing
Manual testing on different flows:

Register with duplicate shop names: ❌ error shown

Login/logout and open subdomain in new tab: ✅ token persists

Expired token: 🔐 auto logout

📂 Backend Repo
🔗 Backend GitHub Repository


