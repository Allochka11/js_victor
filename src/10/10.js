// const alex = {
//     getFile() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('Some file data');
//                 // reject('Sorry I loose my file');
//             }, 2000)
//         })
//     }
// }
//
// // const promise = alex.getFile();
//
//
// alex.getFile()
//     .then((res) => {
//         console.log('Then ' + res)
//
//     })
//     .catch((err) => {
//         console.log('Catch ' + err)
//
//     })
//     .finally(() => {
//         console.log('FINALLY')
//     })


// .then((resultPromise) => {
//     console.log('Then1' + resultPromise)
//     return 10
// })
// .then((res) => {
//     console.log('Then2 ' + res)
//
// })


// promise.then((res) => {
//     console.log('Then:' + res)
// })
// promise.catch((err) => {
//     console.log('Catch:' + err)
// })


// Предполагаемая начинка Promise
// function Promise(executor) {
//     const resolve = (result) => {
//         return {
//             state: 'fullfiled',
//             result: result
//         }
//     }
//     const reject = (error) => {
//         return {
//             state: 'rejected',
//             result: error
//         }
//     }
//     executor(resolve, reject)
// }

let selectId = 'cities';
let hobbyId = 'hobby';
let trueSelectId = document.getElementById(selectId);
let innerHobbyId = document.getElementById(hobbyId);
let variableSelected = trueSelectId.value
let hobbyList = innerHobbyId.value;
console.log(hobbyList)


// let e = document.getElementById("ddlViewBy");
// let value = e.value;
// let text = e.options[e.selectedIndex].text;
// console.log(value)
