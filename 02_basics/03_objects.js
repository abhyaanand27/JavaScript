// singleton - when you create with a construction(only one object)
Object.create //constructor method
// literals - not singleton


//OBJECR LITERALS

//SYMBOL
const mySym = Symbol("key1")
/*
mySym will be a string datatype to use it as symbol put square brackets
*/

const JS_user = {
    name: "Abhya",
    "full name": "Abhya Anand",
    // mySym:"myKey1",
    [mySym]: "mykey1",
    age: 20,
    location: "Delhi",
    email: "abhya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//accessing method
console.log(JS_user.email);
console.log(JS_user["email"]);
console.log(JS_user["full name"]);
console.log(JS_user.mySym);
// access also through sqaure brackets
console.log(JS_user[mySym]);

JS_user.email = "abhyaanand@yahoo.com"

// can't make changes - will freeze the object 
// Object.freeze(JS_user)

console.log(JS_user);

JS_user.greeting = function() {
    console.log("Hello JS user");
}
JS_user.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JS_user.greeting());
console.log(JS_user.greeting2());