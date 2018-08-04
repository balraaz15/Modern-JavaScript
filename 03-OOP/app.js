// Person constructor
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);

    this.calcAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const brad = new Person('Brad', '9-19-1991');
const john = new Person('John', '12/05/1996');

console.log(brad);
console.log(john);
console.log(john.calcAge());


/*===================================================================================*/

// BUILT IN CONSTRUCTORS

// String
const name1 = 'Anthony'; // treats the string as a primitive
const name2 = new String('Antonio'); // treats the string as an object
// can assign new propery in object as:
name2.foo = bar;

// Number
const num1 = 5; // primitive
const num2 = new Number(5); // object

// Boolean
const bool1 = true; // primitive
const bool2 = new Boolean(true); // object

// Function
const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const john1 = {name: 'John'};
const john2 = new Object({name: 'John'});

// Arrays
const arr1 = [1,2,3];
const arr2 = new Array(1,2,3);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('/\\w+/');
