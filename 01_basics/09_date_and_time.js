/*
JavaScript Date objects represent a single moment in time in a platform independent format.
Date objects encapsulate an integral number that represents milliseconds since the midnight at
the beginning of January 1, 1970, UTC (the epoch).
*/

// DATES

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2024, 6, 2)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2024, 6, 2, 5, 3)
// console.log(myCreatedDate2.toLocaleString());

// let myCreatedDate3 = new Date("2024-09-02")
// console.log(myCreatedDate3.toLocaleString());

// let myCreatedDate4 = new Date("09-04-2024")
// console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());

console.log(`${newDate.getDate()} and the time is ${newDate.getTime()}`)

newDate.toLocaleString('default', {
    weekday: 'long',
    dateStyle: Number,
} )
 