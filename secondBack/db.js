const { Pool } = require('pg');
const FUNCTIONS = require('./server/utils/queries')
require('dotenv').config();

const db = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT, 
});


// async function callFunction() {
//     try {
//         console.log(FUNCTIONS)
//         const result = await db.query(FUNCTIONS.getUsers());
//         console.log(result.rows); 
//     } catch (err) {
//         console.error('Ошибка при вызове функции:', err);
//     }
// }

// callFunction();

module.exports = db;

