// tao object de ket noi toi database
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// load bien moi truong
dotenv.config();

const connect = mysql.createPool({
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

export default connect