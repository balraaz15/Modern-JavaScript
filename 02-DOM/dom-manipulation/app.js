let val;

val = document; // gives the docment object (basically the HTML structure of the page)
val = document.all; // gives an array of elements in the DOM with each elements associated classes and ids.
val = document.all.length; // gives the number of elements in the DOM.
// can access each element with the index
val = document.all[0]; // gives the html element

// Accessing the element by their name
val = document.head;
val = document.body;

val = document.forms; // for all the forms
val = document.forms[0];
val = document.forms[0].id;
val = docuemnt.forms[0].method; // get or post

val = document.links; // for all the links or anchor tags

val = document.images; // for images
val = document.scripts; // for scripts
val = document.scripts[2].getAttribute('src'); // getting the attribute of the script tag

// HTMLCollection is not an array (Important)
// Converting HTMLCollection into array
const scripts = document.scripts;
const scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(sc){
    console.log(sc);
});

val = document.domain; // Domain name
val = document.URL; // For URL (document.documentURI)
val = document.characterSet; // For character set
val = document.contentType; // For type of the page

console.log(val);


/*=============================================================================*/

// DOM Selectors for Single Elements

// document.getElementById()
const task = document.getElementById('task-title');

// Change styling
task.style.background: 'purple';

// Change Content
task.textContent = 'Task List';
task.innerText = 'My Tasks';
task.innerHTML = '<span>Task List</span>';

// document.querySelector() => More efficient and powerful
const task = document.querySelector('#task-title'); // for id
const card-title = document.querySelector('.card-title'); // for class
const h5 = document.querySelector('h5'); // for tags

const li-last-child = document.querySelector('li:last-child');


/*=============================================================================*/

// DOM Selectors for Multiple Elements

// document.getElementsByClassName()
const items = document.getElementsByClassName('collection-item'); // for all list items
const item1 = items[0];

// Only selecting the classes inside of ul
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// document.getElementsByTagName()
const lis = document.getElementsByTagName('li');

// document.querySelectorAll()
// gives a node list instead of an array but acts as an array for simple modifications
const items = document.querySelectorAll('ul.collection li.collection-item');

// can use foreach loop directly without having to convert into array
items.forEach(function(item, index){
    item.textContent = `${index} : Hello`;
});
