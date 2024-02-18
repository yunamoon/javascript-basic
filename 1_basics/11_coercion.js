/**
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 * 
 */

// 명시적
let age = 32;
let stringAge = age.toString();
console.log(typeof stringAge , stringAge);

// 암묵적
let test = age +'';
console.log(typeof test , test);

console.log('100' +2);
console.log('100' *2);
console.log('100' -2);
console.log('--------------');


/**
 * + 먕시적 변환
 */
console.log(typeof (100).toString());
console.log(typeof (true).toString());
console.log(typeof (Infinity).toString());
console.log('--------------');

// 숫자 타입으로 변환
console.log(typeof parseInt('0'));
console.log(typeof parseFloat('1.000'));
console.log(typeof +'1');
console.log('--------------');

//boolean 타입 변환
console.log(!!'x');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 은 모두 false를 반환한다.
 */