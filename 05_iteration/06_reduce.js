const arr = [1, 2, 3, 4, 5]

// const initialValue = 0;
// const sumWithInitial = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, initialValue
// )

// console.log(sumWithInitial);

// const sum = arr.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

const sum = arr.reduce( (acc, curr) => acc+curr, 0)

// console.log(sum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);