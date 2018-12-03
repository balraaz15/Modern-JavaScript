const firstName = 'Nemanja';
const lastName = 'Vidic';
const age = 25;
const str = 'Widget with id';

let val;

// APPEND AND CONCAT
// normal concatenation
val = firstName + ' ' + lastName; // 'Nemanja Vidic'

// concat() method
val = firstName.concat(' ', lastName, '. Hello hello'); // Nemanja Vidic. Hello hello

// Append
val = 'Fernando ';
val += 'Torres';

val = 'Hello everyone, I am ' + firstName + ' and I am ' + age + ' years old.';

// ESCAPING
val = 'That\'s awesome';

// CHANGING CASE
val = firstName.toUpperCase(); // FERNANDO
val = firstName.toLowerCase(); // fernando

// ACCESSING CHARACTERS
// If no character is found, [] returns 'undefined' whereas charAt() returns 'empty string'

// Square bracket
val = firstName[1]; 'e'

// charAt() method
val = firstName.charAt(2); // 'r'
// get last character 
val = firstName.charAt(firstName.length - 1); // 'o'

// ITERATE OVER CHARACTERS using for..of:
for(let char of firstName) {
  console.log(char);
}

// SEARCHING FOR A SUBSTRING
// indexOf() method
val = firstName.indexOf('n'); // 3 (first 'n' index)

val = str.indexOf('id'); // 1
val = str.indexOf('id',2); // 12 (starts searching from second position)

val = firstName.lastIndexOf('n'); // 2 (counts from last)

// includes(), startsWith() and endWith()
val = str.includes('dget'); // true
val = str.includes('blah'); // false
val = str.includes('dget',3); // false

val = str.startsWith('Wid'); // true
val = str.endsWith('id'); // true

// GETTING A SUBSTRING
// slice() -> returns the part of the string from start to (but not including) end.
val = str.slice(4); // "et with id"
val = str.slice(2,8); // "dget w"
val = str.slice(-4); // "h id"

// substring() -> returns the part of the string between start and end (start can be greater than end)
val = str.substring(2, 7); // "dget "
val = str.substring(7, 2); // "dget"

// (DEPRECATED) substr() -> returns the part of the string from start with the given length
val = str.substr(1, 4); // "idge"
//first agrument may be negative
val = str.substr(-3, 3); // " id"

// CONVERTING A STRING TO ARRAY
val = str.split(' ');

// REPLACING SOMETHING INSIDE STRING
val = str.replace('Widget', 'Person');

// GET CHARACTER'S CODE
val = 'Hello'.charCodeAt(0); // 72
val = 'Hello'.codePointAt(0); // 72

// VIEW THE CHARACTER ACCORDING TO CODE
val = String.fromCharCode(90); 'Z'
val = String.fromCodePoint(90); 'Z'

console.log(val);
