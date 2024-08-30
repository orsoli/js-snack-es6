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

// Retrieve the interested elements from DOM
const cardContainerElement = document.getElementById("card-container");
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
  // Print in page the results
  cardContainerElement.innerHTML += `
          <div class="col">
              <div class="card border-1 shadow rounded-3">
                  <img src="https://cdn.dribbble.com/userupload/15239462/file/original-6c18f5cdf66be0e25f1f8f08066412c7.jpg?resize=1200x1200"
                      alt="">
                  <h5 class="mt-2">${name}</h5>
                  <p>Foults: ${foults}</p>
              </div>
          </div>
  `;
  return { name, foults }; // return an object with 2 properties : name and foult
});

console.log(teamResult); // Print in console the result
