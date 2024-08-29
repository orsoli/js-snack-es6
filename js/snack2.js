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

//TODO Using reduce() method

// Use reduce method to get a list name of students
const studentsName = students.reduce((names, s) => {
  return [...names, s.name.toLocaleUpperCase()]; // Added in studenstName array student name oppercase of students array.
}, []);
// Use reduce() method get 2 arguments: 1. function if condition is true student object add in acc array, 2.As an initial value is an empty array
const higherStudents = students.reduce((acc, s) => {
  if (s.grades > 70 && s.id > 120) acc.push(s); // Condition if grades of students are higher than 70 and id higher than 120 push student in acc
  return acc; // Return the result
}, []);

// Output phase

console.log(studentsName); // Print in console list name of students
console.log(higherStudents); // Print in console the list of students who meets conditions
