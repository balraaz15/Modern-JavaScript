// Log to the console
console.log('Hello World'); // string
console.log(123); // numbers
console.log(true); // boolean

var greeting = 'Hello';
console.log(greeting); // variable

console.log([1,2,3,4]); // array
console.log({a:1, b:2, c:3}); // objects
console.table({a:1, b:2, c:3}); // displays in a table

// Errors
console.error('This is an error');
console.warn('This is a warning');

// clear the console
console.clear();

// console timer
console.time('Hello');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
console.timeEnd('Hello'); // provides the timestamp while running all the code inside time and timeEnd