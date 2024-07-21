//basic
// <, >, <=, >=, ==, !=

// confusing comparisons 
// console.log("2" > 1); // converted to number
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true
/*
The reason is that an equality check == and comparisons > < >= <= 
works differntly.
Comparisons convert null to a number, treating it as 0.
That's why >= is true and > is false.
*/

// false for all
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);

// === strictly checks value

console.log("2" === 2);
/*FALSE because  === checks for value as well as datatype
no conversion of datatype happens
string != number
*/