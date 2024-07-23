const user = {
    username: "Abhya",
    price: 999,

    welcomeMsg: function() {
        // this - current context
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMsg() // current context was Abhya

//we changed the current context to same (this gives sam now)
// user.username = "Sam"
// user.welcomeMsg()

// console.log(this); //empty object
// if you run this in DOM it shows windows

// function sample1() {
//     let username = "Abhya"
//     console.log(this.username); //undefined
//     console.log(this);
// }
// sample1()


// const sample2 = function () {
//     let username = "Abhya"
//     console.log(this.username); //undefined
//     console.log(this);
// }

// sample2()


// ARROW METHOD

// const sample3 = () => {
//     let username = "Abhya"
//     console.log(this.username); //undefined
//     console.log(this); //empty -  this is why "this" is not used in arrow function
// }
// sample3()

//BASIC
// const addTwo = (num1, num2) => {
//     return num1+num2
// }

//IMPLICIT - no need to use parenthesis
// const addTwo = (num1, num2) => num1+num2
//OR
// const addTwo = (num1, num2) => (num1+num2)

// const addTwo = (num1, num2) => ({username: "Abhya"})

// console.log(addTwo(2,5));

/*
const myArray = [2, 5, 3, 7, 8]

myArray.forEach(function() {})
// or
myArray.forEach(() => {})
// or
myArray.forEach(() => ())
*/
