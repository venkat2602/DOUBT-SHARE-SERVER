// src/dto/StudentDTO.js
class StudentDTO {
    constructor(name, email, password, classGrade, language) {
      this.name = name;
      this.email = email;
      this.password = password;
      this.classGrade = classGrade;
      this.language = language;
    }
  
    toJSON() {
      // Convert the object to a plain JSON object
      return {
        name: this.name,
        email: this.email,
        password: this.password,
        class_grade: this.classGrade,
        language: this.language,
      };
    }
  }
  
  export default StudentDTO;
  