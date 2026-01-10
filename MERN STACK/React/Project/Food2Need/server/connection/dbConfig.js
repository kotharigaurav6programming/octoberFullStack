// export const url = "mongodb://127.0.0.1:27017/food2need";

import dotenv from 'dotenv';
dotenv.config();
export const url = process.env.MONGODB_URL;