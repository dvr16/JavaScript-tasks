function getThis() {
    console.log(this);
    return this;
}

function getPrice(currency = '$') {
    console.log(currency + this.price);
    return this;
}

// getThis();
// window.getThis();
// console.log(window.getThis);

function getName() {
    console.log(this.price);
}

const prod1 = {
    name: 'intel',
    price: 100,
    getPrice,
    getName() {
        console.log(this.name);
    },
    info: {
        information: ['2.3ghz'],
        getInfo: function() {
            console.log(this.information)
        },
    },
};

// prod1.getPrice();
// prod1.info.getInfo();
// prod1.getName();

const prod2 = {
    name: 'AMD',
    price: 50,
    getPrice,
};

prod2.getName = prod1.getName;
prod2.getName();

//prod2.getPrice();

let str = 'Hello world';
const reverseStr = str
    .split('') // ['H','e','l','l','o','','w','o','r','l','d']
    .reverse() // ['d','l','r','o','w','','o','l','l','e','H']
    .join(''); // dlrow olleH
// console.log(reverseStr); // dlrow olleH


const prod3 = {
    name: 'ARM',
    price: 200,
    // getPrice,
    // getName,
};

// getPrice.call(prod3, '*');
// getPrice.apply(prod3, ['*']);

// prod3
//     .getName() // prod3
//     .getPrice(); // prod3.getPrice()

const getPriceBind = prod3.getPrice.bind(prod3, '*');
console.log(getPriceBind);

setTimeout(getPriceBind, 1000);