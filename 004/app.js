"use strict";
console.log('Hellllo');

const fancySet = new Set();

fancySet.add('racoon');
fancySet.add('fox');
fancySet.add('moose');
fancySet.add('wolf');
fancySet.add('fox');

const fox = { animal: 'fox' };
const fox1 = {...fox };

// fancySet.add(fox);
// fancySet.add(fox1);
// fancySet.add(fox);
// fancySet.add(fox1);

// fancySet.delete('fox');

console.log(fancySet.has('fox'));

console.log(fancySet, fancySet.size);

const randomSet = new Set();


do {
    const genDigit = parseInt(Math.random() * 10 + 1);
    randomSet.add(genDigit);
} while (randomSet.size < 10);

console.log([...randomSet]);

console.clear();

const arr = [2, 5, 8, 1, 6, 7, 2, 2];

const arrSet = [...new Set(arr)];

console.log(arrSet);

console.clear();

console.log(new Set([...fancySet].sort()));

const fancyArr = [...fancySet].sort();

fancySet.clear();

fancyArr.forEach(e => fancySet.add(e));

console.log(fancySet);

console.clear();

const fancyMap = new Map();

fancyMap.set({ a: 2 }, 'Racoon');
fancyMap.set({ a: 2 }, 'Fox');
fancyMap.set(function() { return 'hello'; }, 'Beaver');



console.log(fancyMap.get('a2'));

console.log(fancyMap.has('a2'));
console.log(fancyMap.has('Fox'));

fancyMap.forEach((a, i) => console.log(a, i));

const arrMap = [...fancyMap];

fancyMap.clear();

arrMap.sort((a, b) => a[1].localeCompare(b[1]));

arrMap.forEach(e => fancyMap.set(e[0], e[1]));

console.log(arrMap);

// fancyMap.clear();

console.log(fancyMap.has({ a: 2 }));

console.clear();

// console.log(fancyMap);

for (const o of fancyMap) {
    console.log(o);
}

console.clear();

let shopArr = [
    { color: 'pink', dot: true, id: 1 },
    { color: 'skyblue', dot: true, id: 5 },
    { color: 'crimson', dot: false, id: 3 },
    { color: 'pink', dot: false, id: 8 }
];

console.log('3:', shopArr.filter(c => c.id == 3).shift()); // gauti
console.log('8:', !!shopArr.filter(c => c.id == 8).length); // paziureti ar yra
shopArr = shopArr.filter(c => c.id != 5); // istrinti
shopArr.push({ color: 'coral', dot: true, id: 17 }); // prideti

const shopMap = new Map([
    [1, { color: 'pink', dot: true, id: 1 }],
    [5, { color: 'skyblue', dot: true, id: 5 }],
    [3, { color: 'crimson', dot: false, id: 3 }],
    [8, { color: 'pink', dot: false, id: 8 }]
]);

console.log('3:', shopMap.get(3));
console.log('8:', shopMap.has(8));
shopMap.delete(5);
shopMap.set(17, { color: 'coral', dot: true, id: 17 });

// console.log(shopArr);
console.log(shopMap);

console.clear();

let shopArrJson = JSON.stringify(shopArr);

console.log(shopArrJson);

let shopArrJsonBack = JSON.parse(shopArrJson);

console.log(shopArrJsonBack);

console.log(JSON.stringify(shopMap));

console.clear();

let d = 42;

const djson = JSON.stringify(d);

// console.log(djson);

const djsonBack = JSON.parse(djson);

console.log(djsonBack, typeof djsonBack);