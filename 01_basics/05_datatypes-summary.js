//on the basis of storage of data in memory and accessing of data
//there are 2 types - primitive and non-primitive/reference type

/************ Primitive ***********/
/*
7 types of primitive datatypes: pass by value, copy of value is given
1. Stirng
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt
*/
const score = 300;
// decimal is also considered as number there is no float and double in js. 
const floatValue = 10.45;

const isLoggedIn = false
const temperature = null
let userEmali; //undefined

const id = Symbol('123')
const id2 = Symbol('123')

console.log(id === id2);

const bigNumber = 5444546864n 

/************Reference/ Non-primitive ************/
/*
Can pass by reference
1. Array
2. Objects
3. Functions
*/
//array
const heros = ["Iron Man", "Spider Man", "Captain America", "Black Widow"]

//Objects are key-value pairs
let myObj = {
    name: "Abhya",
    age: 22,
}

//function

const myFunction = function() {
    console.log("hello world!");
}

console.log(typeof temperature);

console.log(typeof myFunction); //function object

// JAVASCRIPT is a DYNAMICALLY typed language

