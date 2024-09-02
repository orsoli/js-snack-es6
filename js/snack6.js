/* Snack 6
    Create an array of objects that represent animals. Each animal has a name, a family, and a class.
    Create an array of all the animals that share the same class.
*/

//--- Preparation Phase
// Create variables
const animals = [
  { name: "lion", family: "felidae", animalClass: "mammals" },
  { name: "dog", family: "canidae", animalClass: "mammals" },
  { name: "chicken", family: "phasianidae", animalClass: "birds" },
  { name: "elephant", family: "elephantidae", animalClass: "mammals" },
  { name: "crocodile", family: "crocodylidae", animalClass: "reptiles" },
  { name: "eagle", family: "accipitridae", animalClass: "birds" },
  { name: "whale", family: "cetacea", animalClass: "mammals" },
  { name: "frog", family: "ranidae", animalClass: "amphibians" },
  { name: "shark", family: "selachimorpha", animalClass: "fish" },
  { name: "penguin", family: "spheniscidae", animalClass: "birds" },
  { name: "cat", family: "felidae", animalClass: "mammals" },
  { name: "turtle", family: "cheloniidae", animalClass: "reptiles" },
];

// Use filter() method throwgh each animal object and return new array object based in our condition

const mammalsAnimals = animals.filter(({ name, family, animalClass }) => {
  if (animalClass == "mammals")
    return {
      name,
      family,
      animalClass,
    };
});

//--- Processing phase
console.log(mammalsAnimals);
