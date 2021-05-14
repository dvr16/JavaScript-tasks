// var user = {
//     firstName: 'Dmitry',
//     lastName: 'Dolganov',
//     getFullName: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };


// Функция - конструктор
function User(firstName, lastName) {
    // this = {}
    // this наследует prototype

    this.foo = 'bar';

    this.firstName = firstName;
    this.lastName = lastName;

    this.getFullName = function() {
        return this.firstName + ' ' + this.lastName;
    }

    // return this
}

// Создаем экземпляры объектов
var myUser = new User('Dmitry', 'Dolganov');
var anotherUser = new User('Ivan', 'Ivanov');

// console.log(myUser.getFullName());
// console.log(anotherUser.getFullName());