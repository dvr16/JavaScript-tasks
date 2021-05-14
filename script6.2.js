'use strict'

// Функция - конструктор
function User(firstName, lastName) {
    // this = {}
    // this наследует prototype

    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function() {
        console.log(this);
        return this.firstName + ' ' + this.lastName;
    }

    // return this
}

// function getName() {
//     console.log(this)
// }

// Создаем экземпляры объектов
var myUser = new User('Dmitry', 'Dolganov');
var anotherUser = new User('Ivan', 'Ivanov');

console.log(myUser.getFullName());
console.log(anotherUser.getFullName());
getName();