let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split(' '));
console.log(str.split(''));
console.log(str.split('e'));
console.log(`This is the string that's left over after split: ${str}`)

// the purpose is to separate the string into an array, the parameter being the indicator on what to split at

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(''));
console.log(arr.join(' '));

console.log(arr);
//3) Do split or join change the original string/array?
//No


//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));