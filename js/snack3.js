// --- Prepartion Phase
// Create an object array
const raceBikes = [
  { name: "Canyon Aeroad", weight: 5 },
  { name: "Specialized Tarmac", weight: 7 },
  { name: "Trek Emonda", weight: 5.9 },
  { name: "Giant Propel", weight: 5.5 },
  { name: "BMC Teammachine", weight: 6.8 },
];

// Retrieve the interested elements from DOM
const cardContainerElement = document.getElementById("card-container");
// Use an reduce() method to check smallest weight bike initialized from the first object in raceBikes

const smallestBike = raceBikes.reduce((acc, { weight }) => {
  if (weight < acc.weight) acc.weight = weight; // Condition compare the weight of bike and update acc weight
  return acc; // Return Acc
});

// --- Processing phase
console.log(smallestBike); // Print in console Bike smaller weight

cardContainerElement.innerHTML = `
          <div class="col col-6">
              <div class="card border-1 shadow">
                  <img src="img/original-7b5ebc7218214ba6c1056219dd4841a4.png" alt="">
                  <h5 class='mt-3'><em class='fs-6'>Sport Bike:</em> ${smallestBike.name}</h5>
                  <p>weight: ${smallestBike.weight} kg</p>
              </div>
          </div>
`;
