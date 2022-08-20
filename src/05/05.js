const names = ['Bob', 'Alex', 'Nick', 'John', 'Alla ', 'alla'];
const numbers = [1, 0, 4, 777, -1, 666, 100]

// console.log(numbers.sort((a, b) => a - b).reverse())


let students = [
    {
        id: "1",
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "alla",
        age: 23,
        isMarried: false,
        scores: 100
    }
];

// console.log(students.sort((a, b) => a.scores - b.scores))
// console.log(students.sort((a, b) => a.name.localeCompare(b.nam)))

const nums = [11, 56, 47, 99, 12, 87, 34];

for (let j = 0; j < nums.length - 1; j++) {

    let isSorted = true;
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;
            // let temp = nums[i];
            // nums[i] = nums[i + 1];
            // nums[i + 1] = temp
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]];

        }
    }

    if (isSorted) break
}


console.log(nums)

