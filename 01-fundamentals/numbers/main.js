// MATH WITH NUMBERS

const num1 = 50;
const num2 = 25;

let val;

// Operators
// Unary operators
val = +num1; // 50
val = -num1; // -50

// Binary operators
val = num1 + num2; // 75
val = num1 - num2; // 25
val = num1 * num2; // 1250
val = num1 / num2; // 2
val = num1 % num2; // 0

// Assignment operator
let a, b, c;
a = b = c = 2+2; // a=4, b=4, c=4
// assignment operator returns a value
b = 2;
c = 3 - (a = b + 1); // c = 0 

// Exponentiation
val = 2 ** 2; // 4 (2 * 2)
val = 5 ** 5; // 3125 (5*5*5*5*5)

// Math Object
val = Math.PI; // 3.141592653589793

val = Math.round(2.8); // 3
val = Math.round(2.4); // 3
val = Math.ceil(2.1); // round up (3)
val = Math.floor(2.9); // round down (2)

// Math.trunc() -> removes anything after the decimal point
val = Math.trunc(3.1); // 3
val = Math.trunc(-2.453); // -2

val = Math.sqrt(64); // square root (8)
val = Math.abs(-5); // absolute value (5)

val = Math.pow(8, 2); // exponentiation (64)

// minimum number
val = Math.min(1,2,3,4,6,7,-2); // -2
// maximum number
val = Math.max(1,2,3,4,5,6,3,25); // 25

// round a decimal number to specific digits
// The result of toFixed() is a string.
val = 12.35346.toFixed(2); // 12.35
val = 12.5673.toFixed(2); // 12.57

// random number
val = Math.random(); // random decimal number between 0 and 1
val = Math.ceil(Math.random()*20); // random whole numbers between 1 and 20

// Other ways to write numbers
let billion = 1000000000; // normal way
billion = 1e9; // multiplies 1 by 1 followed by 9 zeroes (1 * 1000000000).
let num = 7.38e7; // 73800000 (7.38 * 10000000)

let ms = 0.000001;
ms = 1e-6; // (1 / 1000000)
ms = 1.23e-4; // (1.23 / 10000)

// isFinite() and isNaN()
// Both methods converts its argument to number and perform the tests

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true
// NaN does not equal anything even itself
console.log(NaN == NaN); // false

console.log(isFinite("15")); // true
console.log(isFinite("str")); // false
console.log(isFinite(Infinity)); // false
