// Declare and assign the variables below

let spaceShuttle = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilometer);

// Calculate a space mission below

let milesToMars = (distanceToMars*milesPerKilometer);
let hoursToMars = (milesToMars/shuttleSpeed);
let daysToMars = (hoursToMars/24);



// Print the results of the space mission calculations below

console.log("It will take", daysToMars, "days to get to Mars in space shuttle Determination");

// Calculate a trip to the moon below

let milesToMoon = (distanceToMoon*milesPerKilometer);
let hoursToMoon = (milesToMoon/shuttleSpeed);
let daysToMoon = (hoursToMoon/24);

// Print the results of the trip to the moon below

console.log("It will take", daysToMoon, "days to get to the Moon in space shuttle Determination");