// SINGLE ELEMENT SELECTORS

// getElementById()
// ------------------------------
const taskTitle = document.getElementById('task-title');

console.log(taskTitle);

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'Tasks';

taskTitle.innerHTML = '<span style="color:orange;">My Tasks</span>';


// document.querySelector() - gets only one element or the first one
// -------------------------------
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
console.log(document.querySelector('ul li'));


// getElementsByClassName() - returns HTMLCollection
// -------------------------------
const items = document.getElementsByClassName('collection-item');
console.log(items);

// get specific elements inside specific elements
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// getElementsByTagName() - returns HTMLCollection
// -------------------------------
const lis = document.getElementsByTagName('li');
console.log(lis);

// querySelectorAll() - returns Node List
// -------------------------------
const itemss = document.querySelectorAll('ul.collection li.collection-item');

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
  li.style.background = '#ccc';
});

for (li of liEven) {
  li.style.background = '#eee';
}

console.log(itemss);
