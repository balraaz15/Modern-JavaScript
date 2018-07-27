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
// Change (only for select element)
taskInput.addEventListener('change', runEvent);

// submit event
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
