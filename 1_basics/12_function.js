/**
 * function -> 함수
 */

/**
 * if 2라는 숫자에 *10 / 2 % 3 스트링으로 반환하고 싶다면?
 */

console.log((2*10/2%3).toString());

// DRY -> Don't Repeat Yourself
function calculate() {
    console.log((2*10/2%3).toString());
}

function calculate(number) {
    console.log((number*10/2%3).toString());
}

calculate(5);

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */

calculate(10);
calculate(2);
console.log("--------------");

function multiply(x,y) {
    console.log(x * y);
}

multiply(2,4);

function multiply(x, y =10) {
    console.log(x*y);
}
multiply(2,4);
multiply(2);
console.log("--------------");

/**
 * return 받기
 */
function returnValue(x, y) {
    return x*y;
}

const result = returnValue(3,5);
console.log(result);
console.log("--------------");

/**
 * Arrow 함수
 */

const arrowFunction = (x, y) => {
    return y + y;
}

console.log(arrowFunction(3,6));

const arrowFunction1 = (x, y) => x + y;
console.log(arrowFunction1(10,30));

const arrowFunction2 = x => x + 50;
console.log(arrowFunction2(150));

const arrowFunction3 = x => y => z => `x: ${x} , y: ${y} , z : ${z}`;
console.log(arrowFunction3(1)(2)(3));
console.log("--------------");

function arrowFunction4(x) {
    return function(y) {
        return function(z) {
            return `x: ${x} , y: ${y} , z : ${z}`;
        }
    }
}
console.log(arrowFunction4(1)(2)(3));
console.log("--------------");

const arrowFunction5 = function(x,y) {
    return x * y;
}
console.log(arrowFunction5(4,5));
console.log("--------------");


const arrowFunction6 = function(x,y,z) {
    console.log(arguments);
    return x * y * z;
}
console.log(arrowFunction6(1,2,3));
console.log("--------------");


const arrowFunction7 = function(...arguments) {
    return Object.values(arguments).reduce((a,b)=> a * b, 1);
}
console.log(arrowFunction7(1,2,3,4,5,6,7,8,9));

// immediately invoked function 
(function(x,y) {
    console.log(x * y);
})(4,5);