// EXAMINING THE DOCUMENT OBJECT
let val;

val = document; // Gives the entire document or the structure of the page
val = document.all; // Gives the collection of elements contained in document as a form of array.
val = document.all.length; // Gives the number of elements present in the DOM

// Access individual elements
val = document.head; // For head
val = document.body; // For body

val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Select elements without using selectors
val = document.forms; // HTMLCollection of forms in the DOM
val = document.forms[0].id; // gives the id of the form
val = document.forms[0].method; // gives the method of the form

val = document.links; // HTMLCollection of the links in the DOM
val = document.links[0].className; // get the class name of the particular link as string
val = document.links[0].classList; // get the class name in a list

// Get the script element
val = document.scripts;
val = document.scripts[2].getAttribute('src');

// Converting HTMLCollection to array
let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
  console.log(script);
});


console.log(val);
