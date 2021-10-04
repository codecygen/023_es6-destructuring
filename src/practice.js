let honda, tesla;
let hondaTopSpeed, hondaTopColour;
let teslaTopSpeed, teslaTopColour;
let restHondaColour;
let restTeslaColour;

const cars = [
  {
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5
    }
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];

[honda, tesla] = cars;
hondaTopSpeed = honda.speedStats.topSpeed;
[hondaTopColour, ...restHondaColour] = honda.coloursByPopularity;
teslaTopSpeed = tesla.speedStats.topSpeed;
[teslaTopColour, ...restTeslaColour] = tesla.coloursByPopularity;

export default cars;
export { honda, hondaTopSpeed, hondaTopColour, tesla, teslaTopSpeed, teslaTopColour };