const tinderUser = new Object() //singleton object

tinderUser.id = "123abc"
tinderUser.name = "Abhya"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Abhya",
            lastName: "Anand"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

/* ? - protection from error (check if value there or not) */

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const obj3 = {obj1, obj2} //obj inside obj
//ASSIGN
const obj3 = Object.assign(obj1, obj2)  //(target, souce)
console.log(obj3);

const obj_3 = Object.assign({}, obj1, obj2) //parenthesis is a good practice, act as target
console.log(obj_3);

//SPREAD
const object3 = {...obj1, ...obj2}
console.log(object3);

const  users = [
    {
        id: 1,
        email: "x@gmail.com"
    },
    {
        id: 2,
        email: "y@gmail.com"
    }
    //objects inside array
]

console.log(users[1].email)
 
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //datatype array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //nested array, convert all key values to a array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
