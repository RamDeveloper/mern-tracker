const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

const uri = process.env.ATLASSP_URI;

app.use(cors());
app.use(express.json());

app.listen(port, ()=>{
    console.log('Server is running in port: ${port}');
});