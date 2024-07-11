function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
 }
 
console.log("----------------------------------------------")

 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
for (i=0; i<3; i++) {
  console.log(randomSelection(happiness));
};




 //b) Have the code randomly pick one array, and then print 2 random items from it.

 console.log("----------------------------------------------")
function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
};

let arrays = [happiness, words];

let randomInt  = Math.random();

for (i=0; i<2; i++){
  console.log(randomSelection(arrays[Math.round(randomInt)]));
}

 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.


 console.log("----------------------------------------------")


let newArray = [];

for (i = 0; i<2; i++) {
  newArray.push(randomSelection(arrays[i]));
 };

 console.log(newArray);
