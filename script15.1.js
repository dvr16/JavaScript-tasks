/*
пусть дан массив с числами, 
запишите в новый массив только те элементы, 
сумма цифр в которых от 1 до 9.
*/

function getDigits(num) {
    let str = String(num);
    return str.split('');
}

function getDigits(num) {
    return String(num).split('');
}

console.log(getDigits(123)); // выведет ['1', '2', '3']