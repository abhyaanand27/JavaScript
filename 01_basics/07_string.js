const name = "Abhya"
const repoCount = 50

console.log(name + repoCount + "Value"); // not the best method
//instead use this - string interpolation 
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Abhya-Anand")  // here string is an object
// you get properties and methods 

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString)

// can give -ve value in slice(reverse string)
//substring ignores the -ve value and starts from 0
const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString1 = "   abhya   "
console.log(newString1);
console.log(newString1.trim());
// works on white spaces and line terminators
// trimStart() ,trimEnd()

const url = "https://abhya.com/abhya%20anand"

url.replace('%20', '-')
console.log(url);
console.log(url.replace('%20', '-'));
// includes => present or not
console.log(url.includes('abhya')); // true

console.log(gameName.split('-')); // split on basis of '-'
 