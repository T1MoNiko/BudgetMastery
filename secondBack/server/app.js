const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const db = require('../db')
const express = require('express')
const cors = require('cors');
const mailerRouter = require('./routes/mailerRouter');
const authRouter = require('./routes/authRouter');
const categoryRouter = require('./routes/categoryRouter');
const transactionRouter = require('./routes/transactionRouter')

const server = () => {
    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use('/mail', mailerRouter);
    app.use('/auth', authRouter);
    app.use('/category', categoryRouter);
    app.use('/transaction', transactionRouter);

    app.listen(process.env.SERVER_PORT, () => {
        console.log('server init');
    })
}

server()