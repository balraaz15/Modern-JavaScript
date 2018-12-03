let val;

const today = new Date();
let birthday = new Date('9-10-1990 11:25:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today; // Gives today's date

// Accessing date and time
val = today.getMonth(); // gives 9 instead of 10
val = today.getDate(); // get today's date
val = today.getFullYear();
val = today.getDay();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

val = today.getTime(); // gives timestamp (number of milliseconds from Jan 1, 1970)
val = today.getTimezoneOffset(); // returns the difference between local time zone and UTC

// Setting date and time
birthday.setMonth(2); // sets month to March
birthday.setDate(15); // sets date to 15
birthday.setFullYear(1990);
birthday.setHours(20);
birthday.setMinutes(50);
birthday.setSeconds(35);

console.log(val);
console.log(birthday);