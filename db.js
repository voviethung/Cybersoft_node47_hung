// tao object de ket noi toi database
import mysql from 'mysql2/promise';

<<<<<<< HEAD
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
=======

const connect = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "123456",
    



})
>>>>>>> d245ae848d3ea82612e6afb38c279e0b58a1e851
