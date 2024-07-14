import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.DB_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10)
});

export default pool;
