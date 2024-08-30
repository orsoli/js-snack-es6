//--- Preparation Phase
const teams = [
  { name: "Milan", points: 0, foults: 0 },
  { name: "Inter", points: 0, foults: 0 },
  { name: "Real Madrid", points: 0, foults: 0 },
  { name: "Barcelona", points: 0, foults: 0 },
  { name: "Bayern", points: 0, foults: 0 },
  { name: "Parma", points: 0, foults: 0 },
  { name: "Dortmund", points: 0, foults: 0 },
  { name: "Liverpool", points: 0, foults: 0 },
  { name: "PSG", points: 0, foults: 0 },
];
// Create variables for rendom numbers
const max = 100;
const min = 1;
// Define functions
// Create a function to generate random nr
const generateRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min) + 1 - min);

// --- Processing phase

// Use map method to create new array to compleat pint and foults, and print new array with names and foults
const teamResult = teams.map(({ name, points, foults }) => {
  points = generateRandomNumber(max, min); // Compleat points with random number
  foults = generateRandomNumber(max, min); // Compleat foults with random number
  return { name, foults }; // return an object with 2 properties : name and foult
});

console.log(teamResult);
