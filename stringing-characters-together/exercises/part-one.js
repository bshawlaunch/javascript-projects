let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

let stringNum = String(num);
console.log(stringNum.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decimal = 12.3455555;

let decString = String(decimal);

console.log(decString.length - 1);


//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.


let newDecimal = 12.34567;
let newDecString = String(newDecimal);

if(decString.includes('.')) {
    console.log(decString.length -1)
    } else {
    console.log(decString.length)
    };

if(newDecString.includes('.')) {
    console.log(newDecString.length -1)
} else {
    console.log(newDecString.length)
}