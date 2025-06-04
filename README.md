🚀 MERN Auth App – Backend (mongodb , express.js) This is the frontend of the MERN Stack Authentication & Authorization project. It includes user registration, login, profile dashboard, and dynamic subdomain-based shop dashboards — built with React, Vite, and Redux Toolkit.
---

🚀 Features
🔐 Secure Signup/Login with validation

🔁 Sessions with JWT and cookie-based auth

🔒 Passwords hashed with bcrypt

🌐 Unique shop names globally

✅ JWT session persistence across subdomains

⏰ Auto-expiry based on "Remember Me"

⚙️ RESTful API with proper status codes

📦 Clean modular structure using MVC

🛠️ Setup Instructions
Prerequisites
Node.js (v18+ recommended)

MongoDB instance (local or cloud)

.env file with necessary configuration

 ## Backend Setup
1.Install All dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
3.Start the build your code:
``` bash
npm run build
```
4.Start the development Backend:
``` bash
npm run start:dev
```

5.create .env file:
``` bash
NODE_ENV=development
PORT=5000

DATABASE_URL=mongodb+srv://task-submission:UnQtmo1wXtEbjDUu@cluster0.gc7k6.mongodb.net/9AM-SOLUTION?retryWrites=true&w=majority&appName=Cluster0
BCRYPT_SALT_ROUNDS=12
JWT_ACCESS_SECRET = 41b991b21dc0a439cb45fed544992ba3fafa3f912d3c4dedebec3592d7d552fb74a86a4d69ea560bcf7bf988d173ddecaffa9815dd5a6661bcacd58c0cdb2dc5
JWT_REFRESH_SECRET = 091b2c529dec033b5ff4531e622ea3f93170e045222963319662b7e4a34f0cdd

```
Runs the backend server on http://localhost:5000

📡 API Documentation
---
Auth Routes (/api/v1/auth)
---
📥 Signup

POST /api/v1/auth/register
``` bash
{
  "username": "johndoe",
  "password": "Secure@123",
  "shops": ["beautyhub", "grocerypoint", "techstore"]
}
``` bash

Validations:

Password must be at least 8 characters, include a number & special character.

Shops must be 3+ and globally unique.

🔓 Signin

``` bash
POST /api/v1/auth/login
``` bash

Body:

 ``` bash
{
  "username": "johndoe",
  "password": "Secure@123",
  "rememberMe": true
}
``` bash

Responses:

Sets an httpOnly cookie with JWT.

Session TTL: 30m (default), 7d (if rememberMe is true)

Clears the auth token from the cookie.


Auth required

Returns:

json
Copy
Edit
{
  "username": "johndoe",
  "shops": ["beautyhub", "grocerypoint", "techstore"]
}
🛡️ Security Notes
JWT stored in secure httpOnly, SameSite=None, Secure cookies

Passwords hashed with bcrypt

Unique shop names enforced using indexed field + server-side validation

Middleware verifies JWT on all protected routes and across subdomains

🌐 Cross-Subdomain Auth
To preserve sessions across subdomains (e.g., beautyhub.localhost):

Set cookies with:
Domain=.localhost; SameSite=None; Secure

Backend sends the cookie with each response

JWT middleware parses and validates token on each subdomain access

🧪 Testing
You can use Postman or REST Client to test endpoints.

Make sure to set withCredentials: true in your frontend requests to handle cookies properly.
