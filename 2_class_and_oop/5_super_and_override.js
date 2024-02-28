/**
 * Super and Override
 */

class DataForm {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `${this.name}는 내부 인원입니다.`
    }
}

class Insider extends DataForm {
    team;

    constructor(name, year, team) {
        super(name, year);
        this.team = team;
    }

    sayHello() {
        return `${super.sayHello()} ${this.team} 소속입니다.`;
    }
}

const yuna = new Insider('문유나', 1996, '어딘가');
console.log(yuna);
console.log(yuna.sayHello());

const sena = new DataForm('문세나' , 2001);
console.log(sena);
console.log(sena.sayHello());