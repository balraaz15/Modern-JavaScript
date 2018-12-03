// EVENT LISTENERS AND THE EVENT OBJECT

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}


// MOUSE EVENTS
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

/*
// Click
clearBtn.addEventListener('click', runMouseEvent);
// Double click
clearBtn.addEventListener('dblclick', runMouseEvent);
// Mousedown (click and hold)
clearBtn.addEventListener('mousedown', runMouseEvent);
// Mouseup (click and hold and let go)
clearBtn.addEventListener('mouseup', runMouseEvent);
// Mouseenter
card.addEventListener('mouseenter', runMouseEvent);
// Mouseleave
card.addEventListener('mouseleave', runMouseEvent);
// Mouseover
card.addEventListener('mouseover', runMouseEvent);
// Mouseout
card.addEventListener('mouseout', runMouseEvent);
// Mousemove
card.addEventListener('mousemove', runMouseEvent);
*/


// Event Handler for mouse event
function runMouseEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // For mousemove
  // Change the heading showing the coordinates
  heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;
  // Change body's background color according to the coordinates
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;

  e.preventDefault();
}


// INPUT / FORM / KEYBOARD EVENTS
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// Clear input
// taskInput.value = '';

form.addEventListener('submit', runFormEvent);

/*
// Types of form event
// keydown - when the key is pressed down
taskInput.addEventListener('keydown', runFormEvent);
// keyup - when the key is pressed and let go
taskInput.addEventListener('keyup', runFormEvent);
// keypress
taskInput.addEventListener('keypress', runFormEvent);
// focus - when focused on the input
taskInput.addEventListener('focus', runFormEvent);
// blur - getting the input out of focus
taskInput.addEventListener('blur', runFormEvent);
// copy
taskInput.addEventListener('copy', runFormEvent);
// cut
taskInput.addEventListener('cut', runFormEvent);
// paste
taskInput.addEventListener('paste', runFormEvent);
// input - fire off for any type of input
taskInput.addEventListener('input', runFormEvent);
// Change
select.addEventListener('change', runFormEvent);
*/


function runFormEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // Get the input on submit
  // console.log(taskInput.value);

  console.log(e.target.value);

  // e.preventDefault();
}
