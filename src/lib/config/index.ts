import dotenv from 'dotenv';

dotenv.config({ path: './config/dev.env' });

export const SERVER_PORT = process.env.PORT

export const DB = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
}