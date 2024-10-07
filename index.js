const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoute')
const cors = require('cors');


dotenv.config();
connectDB();

const app = express();

app.use(cors())
// Middleware
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
