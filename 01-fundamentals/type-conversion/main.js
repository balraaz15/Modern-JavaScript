// TYPE CONVERSION

let val;

// CONVERTING TO STRING
// Using String() function

// Number to string
val = 45; // number
val = String(45); // string (45)
val = String(10+5); // string (8)

// Boolean to string
val = String(true); // string (true)

// Date to string
val = String(new Date()); // converts date object to string

// Array to string
val = String([1,2,4,5]); // string(1,2,4,5)

// Using toString() method
val = (45).toString();
val = (true).toString();


// STRING TO NUMBERS
// Using Number() function

val = '50'; // string
val = Number('50'); // number (50)
val = Number(true); // number (1)
val = Number(null); // number (0)
val = Number('Hello'); // NaN (Not a number)
val = Number([1,2,3]); // NaN (Not a numer) 

// Using parseInt()
val = parseInt('50');
// Using parseFloat()
val = parseFloat('34.524');

// Using '+' operator
val = +'5'; // number(5)

// CONVERTING TO BOOLEAN
// Values that are intuitively empty like '0', 'empty string', 'null', 'undefined', 'NaN' are false; other true
val = Boolean(1); // true
val = Boolean(0); // false
val = Boolean("hello"); // true
val = Boolean(""); // false

// TYPE COERSION
// Javascript implicitly converts the type.
val = '4' + 6; // string(46)
