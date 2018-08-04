/*
    Each object has a prototype. Prototype is an object itself.
    All objects inherit their properties and methods from their prototype.
 */

// Object.prototype

// Person constructor
function Person(fname, lname, dob) {
    this.fname = fname;
    this.lname = lname;
    this.birthday = new Date(dob);

    this.calcAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const john = new Person('John', 'Doe', '8-20-1990');
const jane = new Person('Jane', 'Doe', 'April 24 1978');
