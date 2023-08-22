"use strict";
function introduce(person) {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
}
const person1 = {
    firstName: "Dhriti",
    lastName: "Joshi",
    age: 21,
};
const person2 = {
    firstName: "Kamya",
    lastName: "Patel",
    age: 23,
};
introduce(person1);
introduce(person2);
