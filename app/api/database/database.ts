import mysql, { Pool } from 'mysql2';

const dbHost = process.env.DB_HOST || 'localhost';
const dbUser = process.env.DB_USER || 'admin';
const dbPassword = process.env.DB_PASSWORD || 'admin';
const dbName = process.env.DB_NAME || 'mtg';

// Create a connection pool
const pool: Pool = mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  connectionLimit: 10,
});

export { pool };