// 2 types - stack and heap

// primitive - stack
// non-primitive - heap

//STACK
let myName = "abhyaanand"
let anotherName = myName
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myName);// still holdes the old name bec a copy is passes

//HEAP
let user1 = {
    email: "user@gmail.com",
    upi: "user@upi"
}

let user2 = user1

user2.email = "abhya@gmail.com" // both user1 and user2 value will change because they both refer to the same data

console.log(user1.email);
console.log(user2.email);