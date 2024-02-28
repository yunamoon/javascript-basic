/**
 * Getter and Setter
 */

class DataForm {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * getter
     * 1. 데이터를 가공해서 새로운 데이터를 반환.
     * 2. 프리이빗
     */
    get nameAndYear() {
        return `${this.name}은 ${this.year}생 입니다.`;
    }

    /**
     * setter
     * 1. 데이터 변환
     */
    set name(name) {
        this.name = name;
    }
}

const yuna = new DataForm('yuna moon' , 1996);
console.log(yuna);
console.log(yuna.nameAndYear);
yuna.name = 'sena moon';
console.log(yuna);
console.log("-----------------------------------------");


/**
 * Private value
 */

class DataForm2  {
    #name;
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }
    
    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const name2 = new DataForm2('yuna moon', 1996);
console.log(name2);
console.log(name2.name);
name2.name = '문유나';
console.log(name2.name);