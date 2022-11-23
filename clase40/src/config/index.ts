const dotenv = require("dotenv");
dotenv.config();

export const PORT =  process.env.PORT;
export const JWT_KEY =  process.env.JWT_KEY;
export const MONGO_URI =  process.env.MONGO_URI;
export const DATABASE_TYPE =  process.env.DATABASE_TYPE;