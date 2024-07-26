// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello world!"

for (const greets of greetings) {
    if(greets === ' ') continue;
    // console.log(`each char is ${greets}`);

}

// MAPS
// unique values and maintain order
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    // console.log(key, '-', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, '-', value);   //not iteratible 
// }

const obj1 = {
    js: 'javscript',
    cpp: 'c plus plus',
    rb: 'ruby',
    swift: 'swift by apple'
}

// for in

for (const key in obj1) {
    // console.log(`${key} shortcut is for ${obj1[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // index 
    // console.log(programming[key]); //value
}

// for in on map
for (const key in map) {
    // console.log(key); //nothing will print
}

// forEach loop

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach( (value) => {
//     console.log(value);
// } )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe) //only refernce 

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

// array of object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach ( (item) => {
    console.log(item.languageName);
    console.log(item.languageFileName);
})