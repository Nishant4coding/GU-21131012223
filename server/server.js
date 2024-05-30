// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/products'); // Correct import path

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/categories', productRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
