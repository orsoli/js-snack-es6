/* Snack 5
    Create an array of objects that represent people. Each person has a first name, a last name, and an age.
    Then create a new array by adding, for each person, a sentence with their first and last name, 
    indicating whether they can drive based on their age.
*/

//--- Preparation phase
// Create varables
const persons = [
  { firstName: "John", lastName: "Smith", age: 29 },
  { firstName: "Alice", lastName: "Johnson", age: 13 },
  { firstName: "Maria", lastName: "Garcia", age: 25 },
  { firstName: "David", lastName: "Brown", age: 15 },
  { firstName: "Emma", lastName: "Williams", age: 31 },
];

let description;

// Use map() method
const newListPersons = persons.map(({ firstName, lastName, age }) =>
  age >= 18
    ? (description = `${firstName} ${lastName} can drive because is major age ${age} years old`)
    : (description = `${firstName} ${lastName} cant drive because is minoren age ${age} years old`)
);

// Processing phase

console.log(newListPersons); // print in console
