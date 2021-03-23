/*
Сделайте функцию, которая параметрами принимает 2 числа. 
Если их сумма больше 10 - пусть функция вернет true, 
а если нет - false.
*/

function twoNumbers(a, b) {
    if (a + b > 10)
        alert(true);
    else
        alert(false);
}

twoNumbers(1, 5);
twoNumbers(3, 8);
twoNumbers(5, 5);