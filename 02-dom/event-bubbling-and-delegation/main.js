// EVENT BUBBLING - The event bubbles up the parent of the element

// document.querySelector('.card-title').addEventListener('click', function() {
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function() {
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function() {
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function() {
//   console.log('col');
// });


// EVENT DELEGATION (selecting the parent and working the logic in child.)

// const deleteItem = document.querySelector('.delete-item');
// deleteItem.addEventListener('click', delItem);

document.body.addEventListener('click', delItem);

function delItem(e) {
  // console.log('delete item');
  // console.log(e.target);

  if(e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}
