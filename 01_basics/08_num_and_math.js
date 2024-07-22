// const score = 400
// console.log(score)  //400

// const balance = new Number(100);
// console.log(balance);  //[Number: 100]

// console.log(balance.toString().length); 
// console.log(balance.toFixed(2));  //fix the decimal precision

// const num = 23.1458
// const num2 = 112.958
// const num3  = 1522.12
// console.log(num.toPrecision(3));
// console.log(num2.toPrecision(3));
// console.log(num3.toPrecision(3));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //US standards
// console.log(hundreds.toLocaleString('en-IN')); //indian standards

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);


/*******************    MATH(library)    *****************/

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(2.6));
// console.log(Math.min(-4, 8, 12));
// console.log(Math.max(-4, 8, 12));


// console.log(Math.random()); //random value btw 0 and 1
// console.log((Math.random()*10) + 1); 
// console.log((Math.floor(Math.random()*10)) + 1);


const min = 10
const max = 20

console.log((Math.floor(Math.random() * (max - min + 1))) + min)