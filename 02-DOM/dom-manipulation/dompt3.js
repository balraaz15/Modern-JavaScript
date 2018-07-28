// MOUSE EVENTS

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = docuemnt.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);
// Double click
clearBtn.addEventListener('dblclick', runEvent);
// Mousedown (fires when the element and clicked and hold)
clearBtn.addEventListener('mousedown', runEvent);
// Mouseup (fires when the element is clicked and released, not while being hold)
clearBtn.addEventListener('mouseup', runEvent);
// Mouse enter and Mouse Leave
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);
// Mouse over and Mouse out
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);
// Mouse move
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    // For mouse move
    heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;
}

/*=============================================================================*/

// KEYBOARD AND FORM EVENTS

const form = document.querySelector('form');
const taskInput = docment.getElementById('task');
const heading = docment.querySelector('h5');
const select = document.querySelector('select');

taskInput.value = ''; // clearing the value of the text box

// Events on the text box
// keydown (while the key is pressed)
taskInput.addEventListener('keydown', runEvent);
// keup (while the key is let go)
taskInput.addEventListener('keyup', runEvent);
// keypress
taskInput.addEventListener('keypress', runEvent);
// focus (when the textbox is clicked or on focus)
taskInput.addEventListener('focus', runEvent);
// blur (opposite of focus) (when clicked outside of the box)
taskInput.addEventListener('blur', runEvent);
// cut (ctrl + x)
taskInput.addEventListener('cut', runEvent);
// paste (ctrl + v)
taskInput.addEventListener('paste', runEvent);
// Input (anything we do with the input box)
taskInput.addEventListener('input', runEvent);
// Change (ONLY FOR SELECT ELEMENT)
taskInput.addEventListener('change', runEvent);

// Submit event
form.addEventListener('submit', runEvent);

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    // getting the input value from the text box
    console.log(taskInput.value);

    // For keydown event
    console.log(e.target.value); // getting the value entered in the text box after each keydown
    heading.innerText(e.terget.value); // displaying in the heading

    e.preventDefault();
}


/*==============================================================================*/

// EVENT BUBBLING & EVENT DELEGATION

// Event Bubbling
// If the parent element has event, it is also going to be run when the child elements event is executed.
// Eg: On clicking the child, the click event of parent is fired.
let cardTitle = document.querySelector('.card-title');
cardTitle.addEventListener('click', function(){
    console.log('Card Title');
});

let cardContent = document.querySelector('.card-content');
cardContent.addEventListener('click', function(){
    console.log('Card Content');
});

let card = document.querySelector('.card');
card.addEventListener('click', function(){
    console.log('Card');
});

let col = document.querySelector('.col');
col.addEventListener('click', function(){
    console.log('Col');
});

// Event Delegation
// Putting the listener on parent and puting a condition to try to find a target

// The code below will only work when the first element with class .delete-item is clicked and not others
const deleteItem = document.querySelector('.delete-item');
deleteItem.addEventListener('click', function(){
    console.log('Deleting Item');
});

// Second method
// binding the click event in the body
document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
    // The if statement below will only work when the elements with the exact same class name and no others
    if(e.target.parentElement.className === 'delete-item secondary-content') {
        console.log('Deleting item');
    }

    // The if statement below uses classList and check if the class name is contained in the class list. Then the event is fired for all the elements which has that class.
    if(e.target.parentElement.classList.contains('delete-item')) {
        console.log('Deleting Item');
        // To remove the tasks
        e.target.parentElement.parentElement.remove();
    }
}


/*=============================================================================*/

// LOCAL STORAGE AND SESSION STORAGE
// Data from local storage stays until it is manually cleared
// Data from session storage stays only upto the session time or the browser is closed

// Check in the 'Application' tab for the stored data
// Set local storage item
localStorage.setItem('name', 'Benedict Cumberbatch');

// Set session storage item
sessionStorage.setItem('name', 'Robert Downy Jr.');

// Get from storage
const name = localStorage.getItem('name');
const name1 = sessionStorage.getItem('name');

// Clear the local storage
localStorage.clear();

// remove storage item
localStorage.removeItem('name');
sessionStorage.removeItem('name');

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;
    if (task === '') {
        alert('Please create some task to add');
    }
    else {
        // check if there is already some data in local storage
        // if yes, display the data
        let tasks;

        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        }
        else {
            // Parsing the string into JSON object for future use
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        // Setting the array into the local storage
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Since the storage should be a string, tasks array should be converted to string
        alert('Task saved');
    }
    e.preventDefault();
});

// Looping the values from local storage
/*
    const tasks = localStorage.getItem('tasks'); // does not work because it is not an array
*/
// correct method
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});
