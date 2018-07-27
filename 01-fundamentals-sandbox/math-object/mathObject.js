// SIMPLE MATH WITH NUMBER
const num1 = 100;
const num2 = 50;
let val;

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

console.log(val);

// =============================================================================

// MATH OBJECTS
let val;
val = Math.PI; //3.14.......
val = Math.round(2.8); // 3, 2 if 2.4
val = Math.ceil(2.4); // 3
val = Math.floor(2.8); // 2
val = Math.sqrt(64); //8 (Square root)
val = Math.abs(-3); // 3 (absolute value)
val = Math.pow(8, 2); // 64 (Power)
val = Math.min(1,2,3,4,5); // 1 (minimum value)
val = Math.max(1,2,3,4,5); // 5 (maximum value)

// random numbers generation
val = Math.random(); // gives random decimal number
val = Math.random()*20; // random decimal number from 0 to 19
val = Math.random()*20+1 // random decimal number from 1 to 20
val = Math.floor(Math.random()*20+1) // random whole number

console.log(val);
