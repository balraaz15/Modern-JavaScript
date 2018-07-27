const fname = 'Nemanja';
const lname = 'Vidic';

let val;
const age = 35;

val = fname + lname; // NemanjaVidic
// Concatenation
val = fname + ' ' lname; // Nemanja Vidic


// =============================================================================

// METHODS
// Length
val = fname.length; // 7

// Concatenation
val = fname.concat(' ', lname, ' is awesome.'); // "Nemanja Vidic is awesome."

// Change case
val = fname.toUpperCase(); // "NEMANJA"
val = fname.toLowerCase(); // "nemanja"

// indexOf() and indexes
val = fname[0]; // "N" (in 0 index of fname)
val = fname.indexOf('j'); // 5 (j lies in index 5 from beginning)
val = fname.lastIndexOf('j'); // 1 (lies at 1 index from end of fname)

//charAt()
val = fname.charAt(5); // "j"
// get last char
val = fname.charAt(fname.length - 1);

// substring()
val = fname.substring(0,4); // "Nema"
val = fname.substr(0,4); // "Nema"

// slice()
val = fname.slice(0,4); // "Nema"
val = fname.slice(-3); // "nja" (from the back)
val = fname.substr(-3); // "nja" (from the back)

// split() (similar to explode() in php)
// To convert a comma or space separated sentence to an array
const str = 'apple, banana, guava, mango, papaya';
let arr = str.split(', ');

// join() (similar to implode() in php)
// to convert an array to string using delimeter
const newstr = arr.join(', '); // be the same string as str

// replace()
val = str.replace('guava', 'orange'); // replaces guava with orange

// includes()
// Check if a string is within a string or not
val = str.includes('papaya'); // returns true


// =============================================================================


// TEMPLATE LITERALS (TEMPLATE STRINGS)
const name = 'John';
const age = 35;
const job = 'Web Developer';
const city = 'Stockholm';
let html;

// without template literals (ES5)
html = '<ul><li>Name: '+name+'</li><li>Age: '+age+'</li><li>Job: '+job+'</li><li>City: '+city+'</li></ul>';

// with template literals (ES6)
// we can use expressions, function calls and conditionals with template literals
function hello() {
    return 'Hello';
}

html = `<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>Expression: ${2 + 2}</li>
    <li>Function call: ${hello()}</li>
    <li>Ternary Op: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
</ul>`;

document.body.innerHTML = html;
