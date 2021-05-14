'use strict'

// Функция - конструктор
// function User(firstName, lastName) {
//     this.firstName;
//     this.lastName;
// }

// function getFullName(prefix, suffix) {
//     //console.log(this);
//     return prefix +
//         ', ' +
//         this.firstName +
//         ' ' +
//         this.lastName +
//         suffix;
// }

// var myUser = new User('Дмитрий', 'Долганов');

var a = {
    name: 'foo',
    getName: function() {
        return this.name
    }
};

var b = {
    name: 'bar',
    getName: a.getName
}