// CREATE ELEMENTS

const li = document.createElement('li');

// Add Class
li.className = 'collection-item';
// Add id
li.id = 'new-item';
// Add attribute
li.setAttribute('title', 'New Item');

// Create Text Node and Append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add class
link.className = 'delete-item secondary-content';
// Add icon
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link to li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


// REPLACE ELEMENTS

// Create element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

const oldHeading = document.querySelector('#task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);


// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const closeBtn = firstLi.children[0];

let val;

// Classes
val = closeBtn.className;
val = closeBtn.classList; // returnd DOMTokenList
// Add class to existing class list
closeBtn.classList.add('test');
val = closeBtn;
// Remove class from existing class list
closeBtn.classList.remove('test');
val = closeBtn;

// Attributes
// get the attribute
val = closeBtn.getAttribute('href');
// set attribute
val = closeBtn.setAttribute('title', 'Remove item');
// check if attribute exists
val = closeBtn.hasAttribute('title');


console.log(val);
