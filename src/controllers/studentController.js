import jwt from "jsonwebtoken";
import crypto from "crypto";
import StudentService from "../services/studentService.js";

const registerStudent = async (req, res) => {
  const { name, email, password, classGrade, language } = req.body;

  try {
    const newStudent = await StudentService.registerStudent(
      name,
      email,
      password,
      classGrade,
      language
    );

    const jwtSecret = crypto.randomBytes(32).toString("hex");
    // Generate JWT token with a one-day expiration
    const token = jwt.sign({ email: newStudent.email }, jwtSecret, {
      expiresIn: "1d",
    });

    // Include the token in the response
    res.status(201).json({ student: newStudent, token });
  } catch (error) {
    console.error("Error registering student:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default { registerStudent };
