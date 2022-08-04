const students = [
    {name:"Bob", age:26, isMarried: true,scores: 85},
    {name:"Alex", age:21, isMarried: false,scores: 89},
    {name:"Nick", age:2, isMarried: false,scores: 120},
    {name:"John", age:19, isMarried: true,scores: 100},
]

const getName = (array) => {
    let result = [];

    // const getValueForResult = array => ({...array, age: array.age + 10});
    const getValueForResult = array => ({...array, name: array.name.toUpperCase()});

    for (let i=0; i<array.length; i++) {
        const newValue = getValueForResult(array[i]);

        result[i] = newValue
        // console.log(result[i])
    }

    return result;
}


// const filterFunction = (array, callback) => {
//   const result = [];
//
//   for (let i=0; i<array.length; i++) {
//       if(callback(array[i]) === true) {
//           result.push(array[i])
//       }
//   }
//   return result
// }

const filterFunction = (array, callback) => {
    const result = [];

    for (let i=0; i<array.length; i++) {

        if(callback(array[i]) === true) {
            result.push(array[i])
        }
    }
    return result
}

// console.log(filterFunction(students, student => student.scores >= 100))


const update = students.map(st => st.id === 2 ? {...st, age: 44} : st)
// console.log(students)
console.log(update)
// console.log(students)

// console.log(getName(students))

