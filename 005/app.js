console.log('Hello 005');


const obj = {};

const arr = [];

const map = new Map();

class SayName {

    static voice = 'big one';

    static whatIsYourVoice() {
        return this.voice; // this -> klase
    }

    whatIsYourVoiceNotStatic() {
        return this.constructor.voice;
        return this.voice; // this -> objektas

    }

    constructor() {
        this.papers = 'Yes';
    }

    whatIsYourName() {
        return this.name;
    }

}


class Cat extends SayName {

    static voice = 'small one';

    constructor(name, color) {
        super();
        this.name = name;
        this.color = color;
        this.age = parseInt(Math.random() * 10 + 1);
    }

    whatIsYourName() {
        return 'Miau';
    }

}

class Dog extends SayName {

    constructor(name) {
        super();
        this.name = name;
        this.age = parseInt(Math.random() * 15 + 1);
        this.papers = 'No';
    }

}

const murka = new Cat('Mūrka', 'brown');
const pilkis = new Dog('Pilkis');

// console.log(pilkis.whatIsYourName());
// console.log(murka.whatIsYourName());


console.log(murka.whatIsYourVoiceNotStatic());
console.log(SayName.whatIsYourVoice());



// console.log(obj);
// console.log(arr);
// console.log(map);
console.log(murka);
console.log(pilkis);