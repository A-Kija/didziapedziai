console.log('Hello, hello');

//1
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const arr1 = [];
for (let i = 0; i < 10; i++) {
    const rand = getRandomIntInclusive(1, 10);
    arr1.push(rand);
}
// console.log(arr1);

//2

const arr2 = [...Array(10)].map(_ => parseInt(Math.random() * 10 + 1));
// console.log(arr2);


// Kodo karų kodas
const randomArr = (min, max, n = 1) =>  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
// console.log(randomArr(1, 10, 10)); // cia ne mano jei ka


let a;
const genDigit = parseInt(Math.random() * 10 + 1);

if (genDigit > 5) {
    a = 'A';
} else {
    a = 'B';
}

let b = genDigit > 5 ? 'A' : 'B';

// console.log(a, b);

let racoons = 'A';

racoons = 5;

// console.log(racoons);

if (++racoons || ++racoons) {
    console.log('YES');
} else {
    console.log('NOP');
}

console.log(racoons);