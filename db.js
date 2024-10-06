// tao object de ket noi toi database
import mysql from 'mysql2/promise';

const connect = mysql.createPool({
    host: "localhost",
    user:"root",
    password: "123456",
    



})