// console.log(123)

let sm = document.getElementById('small');
let md = document.getElementById('medium');
let bg = document.getElementById('big');

const clickHandler = (e) => {
    e.stopPropagation()
    console.log(e)
}
const getCurrentTarget = (e) => {
    e.stopPropagation()
    alert(e.currentTarget.id)
}

// sm.onclick = clickHandler;
sm.addEventListener('click', clickHandler)
md.addEventListener('click', getCurrentTarget)
bg.addEventListener('click', getCurrentTarget)

// let max = 0;
//
// let min = 0;

// function maxValue(arr) {
//
//     for (let k = 0; k < arr.length; k++) {
//         if (arr[k] > max) {
//             max = arr[k];
//         }
//
//         if(min )
//
//
//
//     }
//     return max
//
//
// }
//
// function maxValue(arr) {
//     let min = arr[0], max = arr[0];
//
//     for (let k = 0; k < arr.length; k++) {
//         min = min < arr[k] ? min : arr[k];
//         max = max > arr[k] ? max : arr[k];
//     }
//     return [min, max]
//
//
// }
//
// let arr = [-1, 0, 17, -56, 2, 6, 1, 1, 6];
// console.log(maxValue(arr))


//
// function Max(array) {
//     for (let n = 1; n < array.length; n++) {
//         for (let i = 0; i < array.length - n; i++) {
//             if (array[i] > array[i + 1]) {
//                 let changePosition = array[i];
//                 array[i] = array[i + 1];
//                 array[i + 1] = changePosition;
//             }
//         }
//     }
//     return array
//
//
// }

// console.log(Max([1, 2, 3, 4, 5, 6, 9, 0, 888, 0, 2]));
// Max([[1,2,3], [4,5,6]])

