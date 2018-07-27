// ---------- FUNCTIONS ----------

// Function expression
const square = function(a){
    return a * a;
};
console.log(square(5)); // 25

// IIFE (Immediately Invoked Function Expression)
(function(name){
    console.log('Hello ' + name);
})('John');

// When function is put inside of objects, it's called a method
// Property methods
const todo = {
    add: function() {
        console.log('Add Todo');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}
todo.delete = function() {
    console.log('Delete todo...');
}

todo.add(); // "Add Todo"
todo.edit(10); // "Edit todo 10"
todo.delete(); // "Delete todo"


// =============================================================================

// Foreach loop in JS for Arrays
const cars = ['Ford', 'Chevrolet', 'Hyundai', 'Suzuki', 'Tesla', 'Audi'];

cars.forEach(function(car){
    console.log(car);
});

// Map
const users = [
    {id:1, name: 'John'},
    {id:2, name: 'Sara'},
    {id:3, name: 'Karen'}
];
const ids = users.map(function(user){
    return `${user.id}, ${user.name}`;
});

// For - in Loop (used for objects)
const user = {
    fname: 'Nemanja',
    lname: 'Vidic',
    age: 25
}
for(let x in user) { // x is key user is object
    console.log(`${x} : ${user[x]}`);
}


// =============================================================================

// WINDOW METHODS, OBJECTS, PROPERTIES

// Alert
alert('Hello World');
// Prompt
prompt('Enter something');
// Confirm
if(confirm('Are you sure'))
    console.log('YES');
else
    console.log('NO');

let val;
// Outer height and width (from outer edges)
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight; // the height of the visible DOM
val = window.innerWidth; // the width of the visible DOM

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location;

// Redirect
window.location.href = 'https://google.com'; // Redirects the current page to google on page reload
//Reload
window.location.reload(); // keeps constantly reloading

// History Object
window.history.go();
val = window.history.length; // gives how many pages are behind the current page

// Navigator object
val = window.navigator;

console.log(val);


// =============================================================================

// let and const have block level scope
// var has function scope
