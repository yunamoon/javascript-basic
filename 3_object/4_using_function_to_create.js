/**
 * Using function to create objects
 * 
 */

function DataForm(name , year) {

    if(!new.target) {
        return new DataForm(name,year);
    }
    this.name = name;
    this.year = year;

    this.team = function() {
        return `${this.name}은 무소속입니다.`;
    }
}

const yuna = new DataForm('문유나',1996);
console.log(yuna);
console.log(yuna.team());

const yuna2 = DataForm('문세나', 2001);
console.log(yuna2);
console.log(yuna2.team());

const test= (name,year) => {
    this.name = name;
    this.year = year;
}

// test is not a constructor
// const test1 = new test('문유나', 1996);