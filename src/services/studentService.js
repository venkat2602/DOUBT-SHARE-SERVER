// src/services/studentService.js
import Student from '../models/Student.js';
import StudentDTO from '../dto/StudentDTO.js';

const registerStudent = async (name, email, password, classGrade, language) => {
  // Create a new instance of StudentDTO
  const studentDTO = new StudentDTO(name, email, password, classGrade, language);

  // Extract the plain JavaScript object using toJSON method
  const studentData = studentDTO.toJSON();

  // Use the extracted data to create a new student record
  return await Student.create(studentData);
};

export default { registerStudent };
