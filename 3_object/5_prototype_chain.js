/**
 * Prototype
 */

const testObj = {};

// __proto__는 모든 객체에 존재하는 포르퍼티
// class 강의에서 배울 때, 상속에서 부모 클래스에 해당
console.log(testObj.__proto__);

function DataForm(name, year) {
    this.name = name;
    this.year = year;

   this.sayHello = function (){
        return `${this.name}입니다.`
    };
}

console.log(DataForm.prototype);

console.dir(DataForm.prototype, {
    showHidden : true,
})

// circular reference
console.log(DataForm.prototype.constructor === DataForm);
console.log(DataForm.prototype.constructor.prototype === DataForm.prototype);
DataForm.sayStaticHello = function() {
    return `안녕하세요?`;
}
const yuna = new DataForm('문유나', 1996);
const sena = new DataForm('문세나', 2001);
console.log(yuna.__proto__);
console.log(yuna.sayHello() === sena.sayHello());

DataForm.sayStaticHello = function() {
    return `안녕하세요?`;
}
console.log(DataForm.sayStaticHello());

DataForm.prototype.sayHello = function() {
    return `안녕하세요, 프로토타입 메서드입니다.`;
}
const yuna2 = new DataForm('문유나2', 1996);
console.log(yuna2.sayHello());


function DataForm2(name, year) {
    this.name = name;
    this.year = year;

   this.team = function (){
        return `무소속입니다.`
    };
}

const yuna3 = new DataForm('문유나3',1996);
const yuna4  = new DataForm2('문유나4', 1996);

console.log(yuna3.__proto__);
console.log(yuna3.__proto__ === DataForm.__proto__);
console.log(Object.getPrototypeOf(yuna4) === DataForm.prototype);

console.log(yuna3.sayHello());
console.log(yuna4.team());
// console.log(yuna4.sayHello());

Object.setPrototypeOf(yuna4 , DataForm.prototype);
console.log(yuna4.sayHello());