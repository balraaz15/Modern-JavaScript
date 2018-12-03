// ARRAYS AND ARRAY METHODS

// CREATING ARRAYS
const numbers = [1,2,3,4,5]; // numbers array
const numbers2 = new Array(1,2,3,4,5); // using array object

const fruits = ['apple', 'banana', 'mango']; // string array

// mixed array
const mixed = [22, 'hello', true, null, undefined, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length; // 5
// Simplest way to clear for truncate the array
numbers2.length = 0;

// Check if it is array
val = Array.isArray(numbers); // true
val = Array.isArray('blah'); // false

// Accessing array values
val = fruits[1]; // banana

// Add Or Remove Items
// Inserting into array at specific index
numbers[2] = 30;
// Add at the end of array
numbers.push(230);
// Add at the front of the array
numbers.unshift(120);

// Removing from end of array
numbers.pop();
// Removing from the front of the array
numbers.shift();

// Find index of value
val = numbers.indexOf(5); // 4

// SPLICE METHOD(swiss army knife)
let fruits2 = ['apple', 'banana', 'mango', 'guava', 'pear', 'orange'];
val = fruits2.splice(1,3); // removes 3 elements including index 1

var months = ['Jan', 'March', 'April', 'June'];
// inserts at 1st index position without removing any elements
months.splice(1, 0, 'Feb');
console.log(months); // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// replaces 2 element at 2nd index
months.splice(2, 2, 'Sept', 'Oct');
console.log(months);
// expected output: Array ['Jan', 'Sept', 'Oct', 'April', 'June']

// Reversing array
numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);

// Sorting arrays
val = fruits.sort();

// Using compare function for sorting numbers
// In ascending order
val = numbers.sort(function(x,y) {
  return x - y;
});
// use of arrow function
val = numbers.sort((x,y) => x-y);

// In descending order
val = numbers.sort(function(x,y) {
  return y - x;
});
// use of arrow functions
val = numbers.sort((x,y) => y-x);

// Find (find())
function under10(num) {
  return num < 10;
}

val = numbers.find(under10);

// Using find() in array of objects
const users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
console.log(user.name); // John 

// Filter (filter())
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 3

// Convert array to string using a delimeter
val = numbers.join('-'); // "1-2-3-4-5"

// Slice method - copies element from an array into array
const copied = fruits2.slice(1, 3); // banana, mango

