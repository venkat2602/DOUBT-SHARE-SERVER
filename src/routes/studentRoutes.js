import express from 'express';
const studentRoutes = express.Router();
import studentController from '../controllers/studentController.js';

studentRoutes.post('/register/student', studentController.registerStudent);

export default studentRoutes;
