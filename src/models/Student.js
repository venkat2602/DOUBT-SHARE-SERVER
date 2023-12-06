// models/Student.js
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import sequelize from '../config/database.js';

const Student = sequelize.define('Student', {
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  class_grade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'students',
});

Student.beforeCreate(async (student) => {
  student.password = await bcrypt.hash(student.password, 10);
});

export default Student;