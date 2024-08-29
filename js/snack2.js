//--- Preparation Phase
// Create an array variable students of an object for each with id, name and grades properties
const students = [
  { id: 213, name: "Marco della Rovere", grades: 78 },
  { id: 110, name: "Paola Cortellessa", grades: 96 },
  { id: 250, name: "Andrea Mantegna", grades: 48 },
  { id: 145, name: "Gaia Borromini", grades: 74 },
  { id: 196, name: "Luigi Grimaldello", grades: 68 },
  { id: 102, name: "Piero della Francesca", grades: 50 },
  { id: 120, name: "Francesca da Polenta", grades: 84 },
];

const listNameStudents = [];

// Define Functions
// Create a function return name of student
/**
 *
 * @param {string} g // This string get from array method
 */
const getNameStudent = (n) => {
  const name = n.name.toUpperCase(); // UpperCase the name
  listNameStudents.push(name); // Push in array
};

// Create a function check if grade > 70 and return boolean
/**
 *
 * @param {string} g // This string get from method
 * @returns  {boolean} // Return true
 */
const isHigher = (g) => g.grades > 70 && g.id > 120;

// Use forEach method to get a list name of students
students.forEach(getNameStudent);

// Use filter method filter all students and to return his value based in condition
const studentsHigher = students.filter(isHigher);
// --- Output Phase
console.log(listNameStudents); // Print in console list Name of Students
console.log(studentsHigher); // Print in console list Name of Students
