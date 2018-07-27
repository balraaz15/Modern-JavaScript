// OBJECTS (DICTIONARY (look something up based on a key))

const person = {
    firstname: 'John',
    lname: 'Doe',
    age: 30,
    isMarried: false,
    hobbies: ['music', 'sports', 'travel'],
    address: {
        city: 'California',
        state: 'LA'
    },
    getBirthYear: function() {
        // return 1988;
        return (2018 - this.age); // gives birth year
    }
}

let val;

val = person;

// get specific value
val = person.fname; // "John"
val = person['lname']; // "Doe"
val = person.age; // 30
val = person.hobbies[1]; // 'sports'
val = person.address.city; // 'California'
val = person.address['state'] // 'LA'
val = person.getBirthYear(); // 1988


// Array of objects
const people = [
    {name: 'Nemanja', age: 20},
    {name: 'Kylian', age: 19},
    {name: 'Gianluigi', age: 35}
];

// Retrieving the values using for loop
for (let i=0; i<people.length; i++) {
    console.log(`Name: ${people[i].name}, Age: ${people[i].age}`);
}
// Retrieving the values using foreach loop
people.forEach(function(pep){
    console.log(`Name: ${pep.name}, Age: ${pep.age}`);
});


// =============================================================================

// Retrieving data from object
/*
    Cannot use dot notation if the property starts with a number
    someObject.1blah => Invalid
    someObject['1blah'] => Valid
*/
/*
    Cannot use dot notation for property names with spaces
    someObject.fav color => Invalid
    someObject['fav color'] => Valid
 */
/*
    You can lookup using a variable with bracket notation
    var str = 'name';
    someObject.str; // doesn't look for name
    someObject[str]; // evaluates str and looks for 'name'
 */


// =============================================================================

// Updating data of object
const person = {
    name: 'Cristiano',
    age: 33,
    city: 'Juventus'
}
person.age += 1;
person.city = 'Manchester';

// Creating objects
var person = {}
person.name = 'Rio' // And so on....

var person = {
    // keys and values
}

var person = new Object();
person.name = 'Paul' // And so on....
