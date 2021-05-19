var car = {
    sayHello: function() {
        console.log('Поехали!');
    },
    start: function() {
        console.log('Заводимся...');
        setTimeout(this.sayHello, 1000)
    }
};

car.start()