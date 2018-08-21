class Animal {
    constructor() {
        this.type = 'Mammal';
    }

    myType() {
        return `I am a ${this.type}`;
    }
}

class Dog extends Animal {
    constructor(name){
        super();
        this.name = 'Max';
        this.ball = new Ball('red');
    }

    myName(){
        return `My name is ${this.name}`;
    }

    bark(){
        return 'Bark! Bark!';
    }

    play(){
        return `Plays with ball. ${this.ball.bounce()}`;
    }
}

class Ball {
    constructor(color){
        this.color = color;
    }

    bounce(){
        return `the ${this.color} ball bounces on the ground`;
    }
}

let max = new Dog('Max');
console.log(max);
console.log('name', max.name);
console.log('function name', max.myName());
console.log('bark', max.bark());
console.log('play', max.play());
console.log('type', max.myType());