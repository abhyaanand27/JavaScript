function sayMyName() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("Y");
    console.log("A");   
}

sayMyName // reference
// sayMyName() // execute

// function addTwoNums(num1, num2) { //parameters
//     console.log(num1 + num2);
// }
// addTwoNums(3, 4) // arguments
// addTwoNums(3, "a")
// addTwoNums(3, null)

// const result = addTwoNums(3, 5)
// console.log("result = " , result);

function addTwoNums(num1, num2) {
    return num1 + num2 //nothing is executed after return
}
const result = addTwoNums(3, 5)
// console.log("result = " , result);

function loginUserMsg(userName) {
    if(userName === undefined) { //(!userName)
        console.log("please enter a username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMsg("Abhya"))
// console.log(loginUserMsg()) // undefined just logged in

//default value
// function loginUserMsg(userName = "Sam")

// rest operator - ...
function calculateCartPrice (...num1) {
    return num1

}

// console.log(calculateCartPrice(200, 400, 300));

const user = {
    username: "Abhya",
    price: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "Diya",
//     price: 299
// })

const myArr = [200, 400, 600, 800]

function returnSecondValue(getArr) {
    return getArr[1]
}

console.log(returnSecondValue(myArr));
console.log(returnSecondValue([100, 200, 300, 400, 500]));