const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT;



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoutes'));


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(port, () => console.log(`Server is running on port: ${port}`)))
.catch((error) => console.log(error.message));

