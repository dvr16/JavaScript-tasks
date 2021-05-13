/*
Напишем аналог метода .map
*/
// const arr = ['Denis', 'Ivan', 'Maks', 'Olga'];
// [5, 4, 4, 4];

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].length);
// }

// console.log(newArr);


// // получить элементы массива newArr в верхнем регистре
// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr2.push(arr[i].toUpperCase());
// }

// console.log(newArr2);

// перепишем всё это в функции высшего порядка

const names = ['Denis', 'Ivan', 'Maks', 'Olga'];

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }
    return res;
}

function nameLength(el) {
    //console.log(el);
    return el.length;
}

function nameToUpperCase(el) {
    return el.toUpperCase();
}

const result = mapArray(names, nameLength);
const result2 = mapArray(names, nameToUpperCase);

//console.log(result);
//console.log(result2);


// Теперь мы рассмотрим функции высшего порядка,
// в которых возвращаться будет функция

function greeting(firstName) {
    return function(lastName) {
        return `Hello, ${firstName} ${lastName}`;
    };
}

// const testGreeting = greeting('Dmitry');
// const fullName = testGreeting('Dolganov');
const fullName = greeting('Dmitry')('Dolganov');
// console.log(fullName);

function question(job) {
    const jobDictionary = {
        developer: 'что такое JacaScript',
        teacher: 'какой предмет Вы ведете',
    };
    return function(name) {
        return `${name}, ${jobDictionary[job]}?`;
    }
}

const developerQuestion = question('developer');
console.log(developerQuestion('Dima'));

const teacherQuestion = question('teacher');
console.log(teacherQuestion('Dima'));