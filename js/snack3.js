// --- Prepartion Phase
// Create an object array
const raceBikes = [
  { name: "Canyon Aeroad", weight: 2 },
  { name: "Specialized Tarmac", weight: 7 },
  { name: "Trek Emonda", weight: 3 },
  { name: "Giant Propel", weight: 5.5 },
  { name: "BMC Teammachine", weight: 6.8 },
];

// Use an reduce() method to check smallest weight bike initialized from the first object in raceBikes

const smallestBike = raceBikes.reduce((acc, { weight }) => {
  if (weight < acc.weight) acc.weight = weight; // Condition compare the weight of bike and update acc weight
  return acc; // Return Acc
});

// --- Processing phase
console.log(smallestBike); // Print in console Bike smaller weight
