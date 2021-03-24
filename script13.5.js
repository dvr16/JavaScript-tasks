/*
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(i);
    }
    document.write('<br>'); //выводим <br>, чтобы было в столбик
}