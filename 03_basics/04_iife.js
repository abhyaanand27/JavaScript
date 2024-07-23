// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// immediately executed function 
// helps remove global scope pollution


//semicolon used to end function when you write more than 1 iife
(function chai() { //named iife
    console.log(`DB Connected`);
}) ();
//first () - function defination, Secomd () - executing

( function code() {
    console.log(`DB Connected`);
}) ();

( () => { //unnamed iife
    console.log(`DB Connected`);
}) ();

//passing arguments
( (name) => {
    console.log(`DB Connected by ${name}`);
}) ("Abhya");


