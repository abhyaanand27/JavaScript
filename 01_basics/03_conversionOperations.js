let score = null

//console.log(typeof score);
//console.log(typeof (score)); // we can write in 2 ways directly or as a method that is inside parenthesis

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // will return 33
//if score = 33abc. This will be converted to number but if we print value it will return NaN ie Not a number
//if score = null. This return 0
//if score = undefined. This also return NaN
//if score = true/false. 1 for true and 0 for false
//if score = string. NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn);
/*
1 => true
0 => false
"" empty string => false
"xyz" valued string => true
*/

let someNum = 33;

let strnum = String(someNum)

//console.log(strnum);
//console.log(typeof strnum); // converted to string

/********************* Operations ******************/
//basics
// console.log(2**2)
// console.log(4/2) 
// etc...


let value = 3
let negValue = -value
// console.log(negValue);

let str1 = "hello"
let str2 = " Abhya"

let str3 = str1 + str2;
// console.log(str3);


// console.log("1" + 2); // print 12
// console.log(1 + "2"); // print 12
// console.log("1" + 2 + 2); // print 122
// console.log(1 + 2 + "2"); // print 32

// console.log(true);
// console.log(+true); // 1
// console.log(true+); // error
// console.log(+""); // 0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
