// 1. CONSOLE FUNCTIONS
// Logging into the console
console.log('Hello World!');
console.log([1,22,3,4,5]);
var obj = {a:1, b:2, c:3, d:4, e:5};
console.log(obj);
// Displaying the data in tabular form
console.table(obj);

// displaying the time taken to execute all the lines of code inside
// console.time() and console.timeEnd() function
console.time('hello');
    console.log('hello world');
    console.log('hello world');
    console.log('hello world');
    console.log('hello world');
    console.log('hello world');
    console.log('hello world');
    console.log('hello world');
console.timeEnd('hello');

// displaying errors, warnings and information
console.error('This is a custom created error.');
console.warn('This is a custom created warning.');
console.info('This is a custom created information.');
// For clearing the console
// console.clear(); OR clear();

// =============================================================================

// 2. DATA TYPES
// PRIMITIVE
const name = 'John Doe'; // string
const age = 45; //number
const hasKids = true; // boolean
const car = null; // null
let test; // undefined
const sym = Symbol(); //symbol

console.log(typeof name); // for the datatype of name variable

// OBJECTS (REFERENCE)
// console logging the type of objects returns 'object'.
const countries = ['England', 'France', 'Sweden']; // Array

const address ={
    city: 'Stockholm',
    country: 'Sweden'
} // Object Literal

const today = new Date(); // Date
console.log(today);
console.log(typeof today);

// =============================================================================

// 3. TYPE CONVERSION

let val;
// Number to String
val = String(555); // 555
val = String(4+4); // 8
// Boolean to string
val = String(true); // 1 and 0 for false
// Date to String
val = String(new Date());
// Array to String
val = String([1,2,3,4]); // value= 1,2,3,4 :: length=7

// toString() function
val = (5).toString(); // 5
val = (true).toString(); // 1

// String to number
val = Number('5');
val = Number(true); // 1, 0 for false, null and undefined
val = Number('Hello'); // NaN
val = Number([1,2,3,4]); // NaN

val = parseInt('100.35'); // 100
val = parseFloat('100.35'); // 100.35

// Output
console.log(val);
console.log(typeof val);
console.log(val.length); // getting the length of string (ONLY FOR STRING)
console.log(val.toFixed(2)); // setting the digits after decimal (ONLY FOR NUMBERS)


// TYPE COERCION (Converting one type to another)
const val1 = String(5);
const val2 = 8;
const sum = val1 + val2;

console.log(sum); // 56 - due to type coercion
console.log(typeof sum) // string - due to type coercion

// =============================================================================
