import dotenv from "dotenv";
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/pokemon";
export const DB_TYPE = process.env.DB_TYPE || "MONGO";