// Create an element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';
// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('New List item'));

// Create new link element
const link = document.createElement('a');
link.className('delete-item secondary-content');
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appenChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);


/*==============================================================================*/

// REMOVING AND REPLACING ELEMENTS

// REPLACING
const newHeading = document.createElement('h2'); // creating new element
newHeading.id = 'task-title'; // Adding id
newHeading.appendChild(document.createTextNode('Task List')); // New Test

// Get the old heading (the element we want to replace)
const oldHeading = document.getElementById('task-title');

// Get the Parent of the element we want to replace
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVING
const list = document.querySelector('ul');
const li = document.querySelectorAll('li');

li[0].remove; // removes the first list item
list.removeChild(li[3]); // removes child element

// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className; // get the class name of the link
val = link.classList; // get the list of classes as indexed items
val = link.classlist[0]; // access particular class name of the link using the index
link.classList.add('test'); // add a new class name to the list
link.classList.remove('test'); // remove the class name as specified

// Attributes
val = link.getAttribute('href'); // get the value of particular attribute of an element
val = link.setAttribute('href', 'https://google.com/'); // setting the new attribute of an element
val = link.hasAttribute('title'); // gives boolean value whether the element has specified attribute
link.removeAttribute('title'); // remove the specific attribute of an element

/*============================================================================*/

// EVENT LISTENER (THE EVENT OBJECT)

// One method
document.querySelector('.clear-tasks').addEventListener('click', function(e){ // passing the event object
    console.log('Hello World!');
    /* e.preventDefault(); // To prevent the default behaviour */
});

// Another method
document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e) {

    let val;

    val = e; // to view the event object

    // Event target element
    // target is the element the event happens on
    val = e.target; // actual element that is clicked
    val = e.target.id; // get the id of clicked element
    val = e.target.className; // get the class name
    val = e.target.classList; // get the class list

    e.target.innerText = 'Hello'; // Change the text of the element after clicked

    // Event type
    val = e.type;

    // Timestamp
    val = e.timestamp;

    // co-ordinates of event relative to the window
    val = e.clientY; // gives the number of pixels from the top
    val = e.clientX; // gives the number of pixels from the left

    // co-ordinates of event relative to the element itself
    val = e.offsetY; // gives which pixel is clicked vertically on the element
    val = e.offsetX; // gives which pixel is clicked horizontally on the element

    console.log(val);
}


/*============================================================================*/
