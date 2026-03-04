
// the reduce() method is used to reduce an array to a single value (number, string, object, or even another array).

const myNums = [1, 2, 3]

// const myNumsTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal  = myNums.reduce ( (acc, curr) => acc+curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile development",
        price: 4999
    },
    {
        itemName: "data science",
        price: 9999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay)