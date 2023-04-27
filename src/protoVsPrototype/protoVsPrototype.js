let man = {};
let man2 = {};
// console.log(man.__proto__ === man2.__proto__)
// console.log(man.__proto__ === Object.prototype)

let arr = [];
let arr2 = [];
// console.log(man.__proto__)
// console.log(arr2.__proto__ === Array.prototype)

class Samurai {
}

function Lala() {
}

let api = new Samurai()
let a = new Promise(() => {
})
// console.log(typeof '4')

// console.log(Samurai.__proto__ === Function.prototype)
console.log(api.prototype)
// console.log(Lala.prototype)
// console.log(a.__proto__ === Promise.prototype)

class Youtube {
}

let shogun = new Youtube();

let channel = new Youtube()

console.log(Youtube.__proto__)
let numbers = [1, 2, 3]
// console.log(numbers.prototype)
let f = () => {
}

function It() {
}

function It2() {
}

console.log(shogun.__proto__.__proto__ === Object.prototype)
console.log(shogun.__proto__.constructor.__proto__ === Function.prototype)
console.log(shogun.__proto__.__proto__.__proto__ === null)