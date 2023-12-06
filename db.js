// db.mjs
import pgPromise from 'pg-promise';
const pgp = pgPromise();

const db = pgp({
  user: 'newuser',
  host: 'localhost',
  database: 'postgres',
  password: 'adminUser',
  port: 5432,
});

export default db;
