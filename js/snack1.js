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

// const tableName = "VIP"; // The name of vip guest table

// // Define functions
// //Create a function who gerate a card in required format
// /**
//  *
//  * @param {string} g // This string get from array method
//  * @param {number} i // This number get from array method
//  * @returns {object} // Return an object in specific format
//  */
// const createCards = (g, i) => {
//   const guestCard = {
//     tableName,
//     guesName: g,
//     guesPlace: i + 1,
//   };
//   return guestCard;
// };

// // Create array method to call create function for each
// const cardList = guestList.map(createCards);

// //--- Output phase
// console.log(cardList); // Print in console
// console.dir(cardList); // Print console dir testing
// console.table(cardList); // Print console table testing

//-- reduce() method
// Use reduce method get 2 arguments: 1-function which create an object and push,2- as an initial value empty array
const guests = guestList.reduce((acc, g, i) => {
  acc.push({ name: g, table: "VIP", place: i + 1 }); // Accumulated value is an array so i can push inside an object
  return acc; // Return the each object
}, []);

console.log(guests);
