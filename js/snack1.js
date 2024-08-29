// Preparation Phase
// Crate varables alreade know

const guestList = [
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "George Clooney",
  "Amal Clooney",
  "Fedez",
  "Amadeus",
  "Fiorello",
];

// Use reduce method get 2 arguments: 1-function which create an object and push,2- as an initial value empty array
const guestsCard = guestList.reduce((acc, g, i) => {
  acc.push({ name: g, table: "VIP", place: i + 1 }); // Accumulated value is an array so i can push inside an object
  return acc; // Return the each object
}, []);

// --- Output Phase
console.log(guestsCard); // Print in console guestsCard
