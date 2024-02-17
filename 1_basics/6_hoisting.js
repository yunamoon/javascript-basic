/**
 * Hoisting이란?
 */

console.log('hello');
console.log('world');

// console.log(name);
// var name = '문유나';
// console.log(name);

var name;
console.log(name);
name = '문유나';
console.log(name);

/*
* 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상.
* -> 결과론적으로.
*/

/**
 * console.log(moon)
 * let moon = '유나';
 * 
 * Cannot access 'moon' before initialization
 * -> 변수가 존재하긴 하나, 값이 할당 되기 전까지는 접근이 불가능함.
 * -> var보다 let이 많이 사용되는 이유 중 하나, var은 hoistion을 막아주지 못하고 let은 방지가 가능함.
 */
