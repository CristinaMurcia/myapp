const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const mongoose = require('./config');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', bookRoutes);

app.get('app.js', (req, res)=> {
    res.send("<h1>Hola caracola</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});