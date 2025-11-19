const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


dotenv.config();

const app = express();

//middleware:parse json
app.use(express.json());

//connect to database
connectDB();

//routes
app.use('/products', require('./routes/productRoutes'));

//default route (HOME Page)
app.get('/', (req, res) => {
    res.send('Hello WORLD');
});

//start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

