/*
Сделайте функцию, которая принимает параметром число от 1 до 7, 
а возвращает день недели на русском языке.
*/

function dayOfWeek(dayOfNumber) {

    let day = dayOfNumber;

    switch (day) {
        case 1:
            alert('Понедельник');
            break;
        case 2:
            alert('Вторник');
            break;
        case 3:
            alert('Среда');
            break;
        case 4:
            alert('Четверг');
            break;
        case 5:
            alert('Пятница');
            break;
        case 6:
            alert('Суббота');
            break;
        case 7:
            alert('Воскресенье');
            break;
        default:
            alert('Нет таких значений');
    }
}

dayOfWeek(dayOfNumber);