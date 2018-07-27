// Creating arrays
const nums = [34,63,63,2,6,2,66,84]; // normal way, array of numbers
const nums2 = new Array(25,26,27,34,44,45); // using a constructor
const fruit = ['apple', 'banana', 'orange', 'mango']; // array of strings
const mixed = [20, 'Hello', true, undefined, null, {a:1, b:1}, new Date()]; // array of mixed datatypes

let val;

// getting array length
val = nums.length; // 8
// check if is array
val = Array.isArray(nums); // returns true (checks if the variable is array)
// get single value
val = nums[1]; // 63

// Insert into array
nums[2] = 100; // replaces the value form second index and replaces with new value

// find index of value
val = nums.indexOf(66); // 6

// slice()
// to copy a part of the array to another variable of array
const nums = [1,2,3,'a','b',4,5]; // the nums array is unaltered after copying
const letters = nums.slice(3,5); // letters array will now have 'a' and 'b'


// =============================================================================


// MUTATING ARRAYAS
// Adding at the last of the array
nums.push(4);
// Adding at the front of the array
nums.unshift(120);

// remove from end of the array
nums.pop();
//remove from the front of the array
nums.shift();
// Splice values (removing from middle)
nums.splice(1, 1); // 63 is removed from the array

// reverse
nums.reverse();


// =============================================================================


// OTHER METHODS

// concatente arrays
nums.concat(nums2); // concatenates nums array with nums2 array

// sorting string arrays
val = fruit.sort(); // sorts the array in alphabetical order

// sorting numbers arrays
val = nums.sort(); // sorts only in accordance with first digit (i.e. 100 comes before 52)

// sorting numbers arrays using "compare function"
// in regular order
val = numbers.sort(function(x, y){
    return x - y;
});

// in reverse order
val = numbers.sort(function(x, y){
    return y - x;
});

// Find
// finding first number less than 50
function under50(num) {
    return num < 50;
}
val = nums.find(under50); // returns the first number that is lower than 50. check for the sorting that is done if the output seems unclear.
