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

// document.querySelectorAll() => More efficient and powerful
// gives a node list instead of an array but acts as an array for simple modifications
const items = document.querySelectorAll('ul.collection li.collection-item');

// can use foreach loop directly without having to convert into array
items.forEach(function(item, index){
    item.textContent = `${index} : Hello`;
});


/*=============================================================================*/

// TRAVERSING THE DOM (MOVING UP AND DOWN)

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// Get child nodes
// First method
val = list.childNodes; // gives a node list of all the nodes (also counts a line break as a text node)
val = list.childNodes[0]; // gives the node at index 0
val = list.childNodes[0].nodeName; // to get the name of the node
val = list.childNode[0].nodeType; // to get the type of the node

// Types of nodes
/*
    1 - Element
    2 - Attribute (deprecated)
    3 - Text node
    8 - Comment
    9 - Document itself
    10 - Doctype
 */

// Second method
val = list.children; // gives a HTMLCollection of only the html elements
val = list.firstChild; // Gives the first child node
val = list.firstElementChild; // gives the first child element
// similarly, .lastchild and .lastElement are for the last child node and last child element respectively.

val = list.childElementCount; // To get the number of elements inside an element

// Get children of children
val = list.children[3].children; // gives the children node of child at index 3

// Get Parent Node
val = listItem.parentNode; // gives the immediate parent node
val = listItem.parentElement; // gives the immediate parent element
val = listItem.parentElement.parentElement; // gives the parent element of immediate parent element of the element

// Get next sibling
val = listItem.nextSibling; // gives the next sibling node
val = listItem.nextElementSibling; // gives the next sibling element

// Get previous sibling;
val = listItem.previousSibling; // gives the previous sibling node
val = listItem.previousElementSibling; // gives the previous sibling element

/*============================================================================*/
