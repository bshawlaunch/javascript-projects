let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};
let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
}
let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.

let astronauts = [salamander, superChimpOne, superChimpTwo, dog, waterBear];

let ids = [];

while(ids.length < astronauts.length) {
   randomNum = Math.floor(Math.random()*10)
   let id = ids.indexOf(randomNum)
   if (id === -1) {
      ids.push(randomNum)
   }    
}

let i = 0;
for (item in astronauts) {

   astronauts[item]["astronautID"] = ids[i];
   astronauts[item]["move"] = function () {return Math.floor(Math.random()*11)}

   i++
}


// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
for (let j = 0; j < astronauts.length; j++){

   console.log(`${astronauts[j].name} is a ${astronauts[j].species}. They are ${astronauts[j].age} years old and ${astronauts[j].mass} kilograms. Their ID is ${astronauts[j].astronautID}.`)
}
// Start an animal race!

function fitnessTest (astronauts) {
   let testResults = [];
   let turns;
   let steps;
   for (k = 0; k < astronauts.length; k++) {
      turns = 0;
      steps = 0;
      while(steps < 20) {
         steps += astronauts[k].move();
         turns++
      }
      testResults.push(`${astronauts[k].name} took ${turns} to take 20 steps.`)
   }
   return testResults
}

console.log(fitnessTest(astronauts));
