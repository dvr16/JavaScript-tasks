/*
Дан массив с числами. 
Проверьте, что в этом массиве есть число 5. 
Если есть - выведите 'да', а если нет - выведите 'нет'.
*/

function hasElem(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 5) {
            return true;
        }
    }

    return false;
}
let arr = [5, 6, 1];
alert(hasElem(arr));