//  .findIndex
let array = [600, 400, 300, 1402, 948, 133, 200, 99]
array.findIndex((value) => value > 600)

//  .filter
let array = [600, 400, 300, 1402, 948, 133, 200, 99]
array.filter((x) => x > 600)

let products = [
    { name: "Math book", price: 10.99 },
    { name: "Python book", price: 43.87 },
    { name: "Physics book", price: 33 }
]

let expensiveProducts = products.filter((product) => product.price >= 15)

//  .map
let products = [
    {name: "Math book", price: 10.99},
    {name: "Python book", price: 43.87},
    { name: "Physics book", price: 33}
]

let prices = products.map((product) => product.price)


let sum = 0
products.filter((product) => product.price <= 5.0)
    .map((product) => product.price)
    .forEach(price => {
        sum += price
    })

console.log(sum)

//  .some & .every
let users = [
    { name: "Bill Gates", age: 64},
    { name: "Mark Zuckerberg", age: 35},
    { name: "Elon Musk", age: 48},
    { name: "Sundar Pichai", age: 47},
    { name: "Satya Nadella", age: 52}
]

users.some(user => user.age <= 50) //true
users.every(user => user.age <= 50) //false


//  .reduce
let products = [
    { name: "Math book", price: 10.99 },
    { name: "Python book", price: 43.87 },
    { name: "Physics book", price: 33 }
]

let sum = products.reduce((accumulator, element) => accumulator + element.price, 0)
console.log(sum)

// concat
let array2D = [
    [0, 1],
    [2, 3],
    [4, 5]
]

let flat = array2D.reduce((accumulator, element) => accumulator.concat(element), [])
console.log(flat)

// counts
let data = [
    'car',
    'truck',
    'truck',
    'car',
    'bike',
    'van',
    'bike',
    'car',
    'car'
]


//  "car": 4,
//  "truck": 2,
//  "bike": 2,
//  "van": 1
data.reduce((object, item) => {
    if (!object[item]) {
        object[item] = 0
    }
    object[item]++
    return object
    }, 
    {}
)