import pool from '../db/pool';

interface User {
  id?: string;
  email: string;
  number: string;
}

async function createUserService({ email, number }: User): Promise<User> {
  const result = await pool.query(
    'INSERT INTO users (email, number) VALUES ($1, $2) RETURNING *',
    [email, number]
  );

  return result.rows[0];
}

async function getAllUsersService(): Promise<User[]> {
  const result = await pool.query('SELECT * FROM users');

  return result.rows;
}

async function getUserByEmailService({
  email,
  number
}: Partial<User>): Promise<User[]> {
  let result;

  if (email && number) {
    result = await pool.query(
      'SELECT * FROM users WHERE email = $1 AND number = $2',
      [email, number]
    );
  } else if (email) {
    result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  }

  return result.rows;
}

async function getUserByIdService(id: string): Promise<User> {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

  return result.rows[0];
}

async function updateUserService(
  id: string,
  { email, number }: User
): Promise<User> {
  const result = await pool.query(
    'UPDATE users SET email = $1, number = $2 WHERE id = $3 RETURNING *',
    [email, number, id]
  );

  return result.rows[0];
}

async function deleteUserService(id: string): Promise<User> {
  const result = await pool.query(
    'DELETE FROM users WHERE id = $1 RETURNING *',
    [id]
  );

  return result.rows[0];
}

export {
  createUserService,
  getAllUsersService,
  getUserByEmailService,
  getUserByIdService,
  updateUserService,
  deleteUserService
};
