// src/config/database.js
import { Sequelize } from 'sequelize';

const database = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'newuser',
    password: 'adminUser',
});

export default database;
