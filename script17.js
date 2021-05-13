const plus = (x = 0, y = 0) => x + y;

// function plusFoo(x, y) {
//     return x + y;
// }

//console.log(plus(3, 4));
//console.log(plusFoo(4, 5));

const withoutArgs = () => console.log('Hello world');
//console.log(withoutArgs());

const singleArg = x => x * x;
//console.log(singleArg(5));

const moreActions = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
}

// const returnObj = (str = '') => {
//     return {
//         value: str,
//         length: str.length,
//     }
// }

// или 
const returnObj = (str = '') => ({
    value: str,
    length: str.length,
});

function plusFoo(x, y) {
    console.log(arguments)
    return x + y;
}

// plusFoo(1, 2, 3, 'hello');

const obj = {
    firstName: 'Dmitry',
    getFirstName() {
        console.log(this);
    },
};

obj.getFirstName();