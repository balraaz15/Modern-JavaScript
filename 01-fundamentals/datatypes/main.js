// DYNAMICALLY TYPED

/* 
  6 Primitive Datatypes:
  (Accessed by actual values)
  - String (Sequences of characters, letters, nums, symbols etc)
  - Number (int, decimals, floats)
  - Boolean (true or false)
  - Null (intentional empty value)
  - Undefined (variable that has not been assigned a value)
  - Symbols(ES6)
*/

// String
const name = 'John Doe';
// Number
const age = 30;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

console.log(typeof(name)); // string
console.log(typeof(age)); // number
console.log(typeof(hasKids)); // boolean
console.log(typeof(car)); // object
console.log(typeof(test)); // undefined
console.log(typeof(sym)); // symbol

/*
  Reference Datatypes:
  (Accessed by reference, also considered objects)
  - Arrays
  - Object Literals
  - Functions
  - Dates
*/

// Array
const hobbies = ['football', 'music', 'movies'];
// Object Literals
const address = {
  city: 'London',
  country: 'England'
}
// Date
const today = new Date();
console.log(today); // Wed Sep 26 2018 13:27:37 GMT+0545 (Nepal Time) (Essentially today's date)

console.log(typeof(hobbies)); // object
console.log(typeof(address)); // object
console.log(typeof(today)); // object
