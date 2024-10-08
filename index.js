const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoute')
const cors = require('cors');
const recent_viewRoutes = require('./routes/recent_view')

dotenv.config();
connectDB();

const app = express();

app.use(cors())
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/user', productRoutes)
app.use('/api/user', recent_viewRoutes)

app.use((req, res) => {
    res.status(404).json({ message: 'You are hitting a wrong API URL' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
