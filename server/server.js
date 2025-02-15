const express = require('express')
const app =  express();
const userRouter = require('./route/user');
const connectDb = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv').config();

connectDb();
app.use(cors())
app.use(express.json());

app.use('/api', userRouter)

const port = process.env.PORT || 4000

app.listen(port, (req, res) => {
    console.log(`Server is running on port:${port}`)
})