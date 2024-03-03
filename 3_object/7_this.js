/**
 * This
 * 
 * JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에서 평가 된다.
 * 하지만 this keyword는 객체가 바인딩 되는 시점에서 스코프가 결정 된다.
 * 
 * this keyword가 무엇을 가르키나
 * 1) 일반 함수를 호출할 때 this가 최상위 객체 (global 또는 window)를 가리킨다.
 * 2) 메서드로 호출할 때는 호출된 객체를 가리킨다.
 * 3) new keyword를 사용해서 객체를 생성하면 객체를 가리킨다.
 * 
 * this 바인딩
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

const test = function() {
    return this;
}

console.log(test());
console.log(test() === global);

const yuna = {
    name: '문유나',
    year : 1996,
    sayHello : function() {
        return `안녕하세요, 저는 ${this.name}입니다.`;
    },
};
console.log(yuna.sayHello());

function Person(name, year) {
    this.name = name;
    this.year = year;

    this.sayHello = function() {
        return `안녕하세요, 저는 ${this.name}입니다.`;
    }
};
const yuna2 = new Person('문유나',1996);
console.log(yuna2.sayHello());

Person.prototype.team = function() {
    
    function team2() {
        return `${this.name}은 무소속입니다.` 
    }
    return team2();
}
console.log(yuna2.team());


/**
 * call(), apply()
 */

function returnName() {
    return this.name;
}
console.log(returnName());
const yuna3 = {
    name : '문유나',
}
console.log(returnName.call(yuna3));
console.log(returnName.apply(yuna3));

/**
 * 1) call -> ,를 기반으로 아규먼트를 순서대로 넘겨준다.
 * 2) apply -> 아규먼트를 리스트로 입력해야한다.
 */
function multiply (x,y,z) {
    return `${this.name} / 결과값 : ${x + y + z}`;
}
console.log(multiply.call(yuna3, 1, 2,3));
console.log(multiply.apply(yuna3, [1, 2,3]));

/**
 * bind()
 */
const bindTest = multiply.bind(yuna3, 1, 2, 3);
console.log(bindTest);
console.log(bindTest());