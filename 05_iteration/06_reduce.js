const arr = [1, 2, 3, 4, 5]

// const initialValue = 0;
// const sumWithInitial = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, initialValue
// )

// console.log(sumWithInitial);

const sum = arr.reduce( function (acc, currVal) {
    return acc + currVal
}, 0)

console.log(sum);