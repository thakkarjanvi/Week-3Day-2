interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function introduce(person: Person): void {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
}

const person1: Person = {
    firstName: "Dhriti",
    lastName: "Joshi",
    age: 21,
};

const person2: Person = {
    firstName: "Kamya",
    lastName: "Patel",
    age: 23,
};

introduce(person1); 
introduce(person2);
