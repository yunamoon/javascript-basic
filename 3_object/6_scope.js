/**
 * Scope
 * 
 * 모든 선언은 가장 가까운 scope 부터 참조한다.
 */

var numberOne = 20;

function one() {
    console.log(numberOne);
}
one();

function one() {
    var numberOne = 40;
    console.log(numberOne);
}
one();

function one() {
    var numberOne = 40;

    function two() {
        var numberTwo = 99;

        console.log(`two numberTwo : ${numberTwo}`);
        console.log(`one numberOne : ${numberOne}`);
    }

    two();
    console.log(`one numberOne : ${numberOne}`);
}
one();

/**
 * JS -> Lexical Scope
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 실행한 위치가 상위 스코프를 정한다.
 */
var numberThree = 3;
function three() {
    var numberThree = 100;
    fourth();
};
function fourth() {
   console.log(numberThree);
};
three();

var i = 999;
/**
 * var keyword는 fucntion에서만 새로운 scope가 형성
 * let, const keyword는 for, if 같은 범위에서도 block level scope 형성 가능
 */
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(`최종? ${i}`);