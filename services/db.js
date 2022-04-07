import { createPool } from 'mysql2/promise';
import config from '../config.js';

export default async function query(sql, params) {
  const pool = createPool(config.db);
  const [rows] = await pool.execute(sql, params);
  pool.end
  return rows;
}





