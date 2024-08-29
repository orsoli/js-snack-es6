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

const tableName = "VIP"; // The name of vip guest table

// Define functions
//Create a function who gerate a card in required format
const createCards = (g, i) => {
  const guestCard = {
    tableName,
    guesName: g,
    guesPlace: i + 1,
  };
  return guestCard;
};

// Create array method to call create function for each
const cardList = guestList.map(createCards);

//--- Output phase
console.log(cardList); // Print in console
console.dir(cardList); // Print console dir testing
console.table(cardList); // Print console table testing
