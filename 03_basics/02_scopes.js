// var c = 300
//global scope
let a = 200

if(true) { // block scope
    let a = 10
    const b = 20
    var c = 30
    // console.log("inner a:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

//global scope in browser console is different from global scope in node


/********** nested scope **********/

function one () {
    const username = "Abhya"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error

    two()
}
// one()

if(true) {
    const username = "Abhya"

    if(username == "Abhya") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website); //error
}

// console.log(username); //error 


//hosting

function addone(num) {
    return num + 1
}
addone(5)

//variable contains a function (called expression)
const addTwo = function(num) {
    return num + 2
}

addTwo(5)