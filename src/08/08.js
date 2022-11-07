const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};


// console.log(user === copyUser)
// console.log(user.friends === copyUser.friends)
//Проверка:
// - что должно быть в консоли?
// console.log(user.friends===copyUser.friends)- что должно быть в консоли?

//2. Полная (глубокая) копия объекта user
// let deepCopyUser;

const deepCopyUser = Object.assign({}, user);
// console.log(deepCopyUser)
// console.log(user)
// console.log(user === deepCopyUser)
// console.log(user.friends === deepCopyUser.friends)

//Проверка:
// console.log(user===deepCopyUser) - что должно быть в консоли?
// console.log(user.friends===deepCopyUser.friends) - что должно быть в консоли?

//3. Поверхностная копия массива students
let copyStudents = [...students];
// console.log(copyStudents === students)
//Проверка:
// console.log(код проверки написать самостоятельно ) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(student => {
    return {...student}
});

//Проверка:
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?
// console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents].sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
// console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(student => student.scores >= 100);
// console.log(bestStudents) // 120,110,105, 100
// console.log(deepCopyStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
let topStudents = deepCopyStudents.splice(0, 3);
// console.log(topStudents)
// console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
// console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(student => student.isMarried === false);
// console.log(notMarriedStudents)


//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(student => student.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ');
// console.log(namesWithSpace)
let namesWithComma = studentsNames.join(',');
// console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(student => ({...student, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(student => student.name === 'Nick' ? {
    ...student,
    isMarried: true
} : student);
// console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(student => student.name === 'Ann');
// console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = students.reduce((acc, el) => acc.scores < el.scores ? el : acc);

console.log(bestStudent)

function newMax(array) {
    let maxScoresStudent = array[0];
    for (let i = 1; i < array.length; i++) {
        if (maxScoresStudent.scores < array[i].scores) {
            maxScoresStudent = array[i];
        }
    }
    return maxScoresStudent;

}

console.log(newMax(students));


function max(students) {
    for (let i = 0; i < students.length - 1; i++) {
        if (students[i].scores > students[i + 1].scores) {
            return [students[i + 1], students[i]] = [students[i], students[i + 1]]
        }
    }
}

console.log(max(students)[0]);


//13. Найдите сумму баллов всех студентов (reduce)

let scoresSum = students.reduce((acc, el) => acc + el.scores, 0)
// console.log(students.reduce((acc, el) => acc + el.scores, 0))

// И поднимаем руку!!!!

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    //..............................
}

// console.log(addFriends(students));


function countBy(x, n) {
    let res = [];

    for (let i = 1; i <= n; i++) {
        res.push(x * i)
    }
    return res

}

console.log(countBy(2, 5))








