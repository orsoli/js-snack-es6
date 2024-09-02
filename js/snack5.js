/* Snack 5
Starting from an array of strings
Create a second array by formatting the strings from the first array in lowercase with the first letter capitalized.

Ex: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
*/

//--- Preparation phase
const names = ["orsol", "francesco", "MARCO", "ALESSIO", "andrea"];

//--- Processing phase
const capitalizedNames = names.map(
  // Get first character and convert in uppercase, and slice the rest started from character 1 and convert in lowercase.
  (name) => name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase()
);

console.log(capitalizedNames); // Print in console new array
