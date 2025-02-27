import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './db/connectDB.js';

dotenv.config();
const app = express();

app.get('/', (req, res) => { 
    res.send('Server is ready pakooo');
});

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});