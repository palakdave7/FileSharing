import express from 'express';
import cors from 'cors';
import path from 'path';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import router from './routes/api.js';

const app= express();
dotenv.config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//frontend backend running on different port communicate using cors
app.use(cors())

//Importing Routes
import router from './routes/api.js';
app.use('/',router);


app.use(express.static(path.join(__dirname,'/frontend/dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
});

const __dirname=path.resolve();


// Importing the database connection
import Connection from './database/db.js';
Connection();