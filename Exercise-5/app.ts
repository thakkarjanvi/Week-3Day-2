type StringOrArray = string | any[];


function getLength(input: StringOrArray): number {
    if (typeof input === "string") {
        return input.length;
    } else if (Array.isArray(input)) {
        return input.length;
    } else {
        throw new Error("Unsupported type");
    }
}

const strLength = getLength("Hello, How are you?");
const arrLength = getLength([3, 6, 9, 12, 15, 18, 21]);

console.log(`The length of a string: ${strLength}`); 
console.log(`The length of an array: ${arrLength}`);  
