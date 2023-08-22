"use strict";
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
const a = 10;
const b = 5;
console.log("Math Operations:");
console.log(`Addition: ${add(a, b)}`);
console.log(`Subtraction: ${subtract(a, b)}`);
console.log(`Multiplication: ${multiply(a, b)}`);
console.log(`Division: ${divide(a, b)}`);
