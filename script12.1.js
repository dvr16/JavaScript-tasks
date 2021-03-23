/*
Сделайте функцию, которая параметрами принимает 2 числа. 
Если эти числа равны - пусть функция вернет true, 
а если не равны - false.
*/

function twoNumbers(a, b) {
    if (a === b)
        alert(true);
    else
        alert(false);
}

twoNumbers(3, 5);
twoNumbers(3, 8);
twoNumbers(5, 5);