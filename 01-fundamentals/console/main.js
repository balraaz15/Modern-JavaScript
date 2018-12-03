// Logging to the console
console.log('Hello World!'); // string
console.log(123); // numbers
console.log(true); // boolean

var greeting = "Hello";
console.log(greeting); // variable

console.log([1,2,3,4,5]); // array

console.log({a:1, b:2}); // object

console.table({a:5, b:10}); // table

console.error('This is an error message'); // error
console.warn('This is a warning message'); // warning

// record the timestamp of a particular script or action(s)
console.time('Hello');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
  console.log('Hello World');
console.timeEnd('Hello');