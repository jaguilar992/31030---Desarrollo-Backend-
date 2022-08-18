require("dotenv").config();

const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
const DATABASE_PORT = process.env.DATABASE_PORT || "3306";
const DATABASE_USER = process.env.DATABASE_USER || "antonio";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "password_1234";

// console.log(DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD);