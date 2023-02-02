const A = [
    'a',
    'b',
    'c'
];

const B = [...A];

const addStars = word => console.log('* ' + word + ' *');

Array.prototype.go = function(fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i]);
    }
}

animals = [
    'racoon',
    'beaver',
    'moose',
    'fox'
];

B.push('');

B.go(addStars);
B.forEach(addStars);





const fr = B.forEach(l => console.log(l));



const mr = B.map(l => l + '----->');

console.log(fr);
console.log(mr);

console.clear();

const filtered = animals.filter(l => l != 'beaver').map(l => l + ' *');

console.log(animals);
console.log(filtered);

//REACT PROGRAMER
const out = animals.map(a => '<i style="color: crimson; display: block;">' + a + '</i>');


// REACT INSIDE
let html = '';
out.forEach(a => html += a);
document.querySelector('h1').innerHTML = html;

console.clear();

const state = [
    'racoon',
    'beaver',
    'Moose',
    'fox',
    'Fox'
];

const an = [...state];

// state.push('wolf'); // mirstam
// state.sort(); // mirstam

console.log([...state, 'wolf'].sort());

console.clear();

an.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
});

an.sort((a, b) => b.localeCompare(a));

const dig = [88, 34, 10, 158, 1];

console.log(an);

dig.sort((a, b) => b - a);

console.log(dig);

console.clear();

const man = {};
man.name = 'John';
man.surname = 'Smith';

const man2 = {...man };

man2.name = 'Arron';

const man3 = {
    name: 'Petras',
    surname: 'Lioliovas'
}

const name = 'Lina';
const surname = 'Lioliovė';

// const man4 = {
//     name: name,
//     surname: surname
// }

const man4 = {
    name,
    surname
}


const prop = 'surname';

const man5 = {}
man5.name = 'Bronius';
man5[prop] = 'Kisas'


console.log(man, man2, man3, man4, man5);

console.clear();

const house = [man, man2, man3, man4, man5];


house.sort((a, b) => {
    if (a.surname > b.surname) return 1;
    if (a.surname < b.surname) return -1;
    // pavardes vienodos
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    // ir vardai vienodi
    return 0;
})


console.log(house);