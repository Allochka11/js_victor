// let c = 0;
// const counter = () => {
//     // let count = 0;
//     return () => {
//         console.log(++c)
//     }
// }
//
// const count = counter();
// const count1 = counter();
//
// count();
// count();
// count();
//
// count1();
// count1();
// count1();
// console.log(a)
// let a;

function curry(f) { // curry(f) выполняет каррирование
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c)

            }

        }

    }
}

// использование
function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);
console.log(curriedSum(2)(3)(1));
