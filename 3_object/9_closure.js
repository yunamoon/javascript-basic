/**
 * Closure
 * 
 * 클로저는 어떤 함수와 해당 함수가 선언된 렉시켤 환경의 조합이다
 *      = 상위 함수보다 하위 함수가 더 오래 살아 있는 경우.
 */

function getNumber() {
    var number =5;
    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
};

console.log(getNumber());

function getNumber() {
    var number =5;
    
    function innerGetNumber() {
        return number;
    }

     return innerGetNumber;
}

const runner = getNumber();
console.log(runner());

/**
 * 1) 데이터 캐싱
 */
function cacheFunction() {
    var number = 10* 10;

    function inner(n) {
        
        return number * n;
    }

    return inner;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));
console.log(runner2(30));

/**
 * 2) 값을 변경
 */
function cacheFunction2() {
    var number = 99;

    function increment() {
        number ++;
        return number;
    }

    return increment;
}
const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 */
function Test(name, year) {
    this.name = name;
    var _year = year;

    this.sayHello = function() {
        return `안녕하세요, 저는 ${this.name}입니다. ${_year}생 입니다.`;
    }
};

const yuna = new Test('문유나' , 1996);
console.log(yuna.sayHello());
console.log(yuna._year);