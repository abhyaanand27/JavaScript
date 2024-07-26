// const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNum = num.filter( (num) => num > 4)   // return values
// console.log(newNum);

// let newNum2 = num.filter( (num) => {  // use return when {} is used
//     return num > 4}) 
// console.log(newNum2);

const newNum3 = []

num.forEach( (num) => {
    if(num > 4) {
        newNum3.push(num)
    }
})
console.log(newNum3);