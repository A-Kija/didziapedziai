console.log('HeLLo');

window.addEventListener('load', () => {
    const r = document.querySelector('h1');
    // console.log(r);
});

// && ||

const A = 5;
const B = 0;


console.log('A && B', A && B);
console.log('B && A', B && A);
console.log('A || B', A || B);
console.log('B || A', B || A);


// console.log('A || B', A || B);

/*
T && T => T
T && F => F

shortcut
F && T => F
F && F => F
*/

/*
F || T => T
F || F => F

shortcut
T || T => T
T || F => T
*/

const D = 0;
const SD = '' + D;
console.log(typeof D, '=>', typeof SD);

const S = '88';
const DS = +D;
console.log(typeof S, '=>', typeof DS);

const L1 = !!D;
const L2 = !!S;
console.log(L1, L2);
console.clear();


// deklaravimas
const sayHello = function() {
    // console.log('Labas');
    return 'Va kaip viskas buvo';
}

const fun = function() {
    console.log('ONE');
    return function() {
        console.log('TWO');
        return function() {
            console.log('THREE');
        }
    }
}

const tooFun = () => () => () => console.log('THREE');

tooFun()()();

// kvietimas
// sayHello();

// console.log(`
// ----------

// `);

// const vaRun = sayHello();
// const vaNotRun = sayHello;

// kvietimas
// console.log(vaRun, vaNotRun());

// const makeFun = fun;

// makeFun()()();



const Hi_1 = function() {
    return 'Va kaip viskas buvo';
}

const Hi_2 = () => {
    return 'Va kaip viskas buvo';
}

const Hi_3 = () => 'Va kaip viskas buvo';

const Hi_4 = _ => 'Va kaip viskas buvo';

// console.log(Hi_4());

// parametrai
// const funFun = (a, b = 100) => {
//     console.log(a - b);
// }

const _15 = 15

// argumentai
// funFun(8);

console.clear();

const animals = [
    'racoon',
    'beaver',
    'moose'
];

const colors = [
    'pink',
    'crimson',
    'skyblue'
];

const addStars = word => console.log('* ' + word + ' *');
// const addPluses = word => console.log('+ ' + word + ' +');

const iterator = (what, fun) => {
    for (let i = 0; i < what.length; i++) {
        fun(what[i]);
    }
}

// iterator(animals, word => console.log('+ ' + word + ' +'));
// iterator(colors, addStars);

// animals.forEach(addStars);
// colors.forEach(word => console.log('+ ' + word + ' +'));

// colors.forEach((word, index) => console.log(word, index));

// for (let i = 0; i < animals.length; i++) {
//     addStars(animals[i]);
// }

// for (let i = 0; i < colors.length; i++) {
//     addStars(colors[i]);
// }

// animals[15] = 'bird';



// console.log(animals[1]);

// animals.push('bird');
animals.unshift('mouse', 'fox', 'wolf', 'rabbit');
animals.unshift(...colors, ...animals);
// animals.pop();
// animals.shift();

console.log({...colors })




console.log(animals);