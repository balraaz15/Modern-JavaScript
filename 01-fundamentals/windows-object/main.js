// WINDOW METHODS / OBJECTS / PROPERTIES

/*
// log into console
console.log(123);
window.console.log(123);

// alert
alert('Hello World');

// prompt
const input = prompt();

// confirm
if(confirm('Are you sure')) {
  console.log('Yes');
} else {
  console.log('No');
}
*/

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll Points
val = window.scrollY;
val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect
// window.location.href = 'https://google.com';
// Reload
// window.location.reload;

// History object

// go back to visited pages
// window.history.go(-1); // goes back one page
// window.history.go(-2); // goes back two pages
// window.history.go(-3); // goes back three pages
// ... and so on ...

val = window.history.length; // get how many pages are behind the current page

// Navigator object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.userAgent;
val = window.navigator.platform;
// etc ...

console.log(val);
