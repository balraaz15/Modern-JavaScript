/*
// set local storage item
localStorage.setItem('name', 'Tron');
localStorage.setItem('age', '22');

// set session storage item
sessionStorage.setItem('name', 'Emma');

// remove from storage
// localStorage.removeItem(name);

// get the value from storage
const name = localStorage.getItem('name');
console.log(name);

// clear local storage
localStorage.clear();
*/

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved.');

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task) {
  console.log(task);
});