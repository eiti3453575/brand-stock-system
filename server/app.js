
require('dotenv').config();
const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;


// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// בדיקת משתנה הסביבה
console.log('MONGO_URI exists:', !!process.env.MONGO_URI);


// חיבור למסד הנתונים
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err.message));
} else {
  console.log('Error: MONGO_URI is missing in .env file');
}