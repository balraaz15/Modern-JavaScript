// Example of object literal
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@email.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }
};

// Creating objects
// Object constructor syntax
// let user = new Object();

// Object literal syntax
let user = {
    name: 'John',
    age: 30,
};

// Adding value to object
user.isAdmin = true;
// Removing a propery from object
delete user.age;
// Use of multiword property name
user["likes birds"] = true;

