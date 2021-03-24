/*
поменяйте ключи и значения в объекте, 
например из {a: 1, b: 2, c: 3, d: 4, e: 5} 
сделаем {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}.
*/

var obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
var result = {};

for (let key in obj) {
    result[obj[key]] = key;
}

console.log(result); //выведет {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}