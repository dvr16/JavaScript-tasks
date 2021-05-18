// Базовая (родительская) функция - конструктор

function User(firstName, lastName) {
    this.getFullName = function() {
        return firstName + ' ' + lastName;
    }
}

User.prototype.getFullName = function() {
    return firstName + ' ' + lastName;
}











// Дочерняя функция - конструктор
function Manager(firstName, lastName) {
    User.call(this, firstName, lastName);
}

function Teacher(firstName, lastName) {
    User.apply(this, arguments);

    this.SayHello = function() {
        alert('Здравствуйте, чем я могу Вам помочь?');
    }
}

var u = new User('John', 'Doe');
var m = new Manager('Dmitry', 'Dolganov');
var t = new Teacher('Irina', 'Lavrova');