import dns from 'node:dns';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';
import brandRoutes from './routes/brandRoutes.js';
import productRoutes from './routes/productRoutes.js';

dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server and MongoDB are running successfully!');
});

app.use('/api/brands', brandRoutes);
app.use('/api/products', productRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log('MONGO_URI exists:', !!process.env.MONGO_URI);

if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err.message));
} else {
  console.log('Error: MONGO_URI is missing in .env file');
}