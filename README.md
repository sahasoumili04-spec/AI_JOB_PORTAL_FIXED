Project Setup Guide
Prerequisites
Node.js (v18 or later)
npm
MongoDB (Local or MongoDB Atlas)
Clone the Repository
git clone <repository-url>
cd <project-folder>
Install Dependencies

Since node_modules is not included in the repository, install all dependencies using:

npm install
Configure Environment Variables

Create a .env file in the project root directory and add the required variables:

PORT=3000
MONGO_URI=<your-mongodb-connection-string>


node server.js at Last
Commit in this repo its conncted to automatic ci/cd of render any commit detected it deploys it again

https://ai-job-portal-fixed-1.onrender.com/
https://ai-job-portal-fixed-1.onrender.com/api/users/login
{
  "email": "soumili@gmail.com",
  "password": "Password@123"
}
use this in postman to login and check
https://ai-job-portal-fixed-1.onrender.com/api/users/register 


