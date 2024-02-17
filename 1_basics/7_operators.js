/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);

console.log("---------------")

/**
 * 증가와 감소
 */

let number = 1;
number++;
console.log(number);

number--;
console.log(number);

console.log("---------------")

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);
result = number++;
console.log(result , number);

result = number--;
console.log(result, number);

result = ++ number;
console.log(result, number);

/**
 * number가 아닌 경우에 연산
 */
let test = '99';
console.log(+test);
console.log(typeof +test);

let isTrue = true;
let isFalse = false;
console.log(+isTrue , +isFalse)

let isString = '문유나';
console.log(+isString);
// NaN -> Not a Number;

/**
 * 할당 연산자 (assignment operator)
 * -> 계산 후의 값을 할당.
 */

number = 100;
console.log(number);
number += 10;
console.log(number);
number *= 10;
console.log(number);
number /= 10;
console.log(number);
number %= 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(1 == true);
console.log(0 == false);
console.log("---------------")

console.log(5 === 5);
console.log(5 === '5');
console.log(1 === true);
console.log(0 === false);
console.log("---------------")

console.log(5 != 5);
console.log(5 != '5');
console.log(1 != true);
console.log(0 != false);
console.log("---------------")

console.log(5 !== 5);
console.log(5 !== '5');
console.log(1 !== true);
console.log(0 !== false);
console.log("---------------")

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);
console.log("---------------")

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10>0? 'true' : 'false');
console.log("---------------")

/**
 * 논리 연산자 
 * 1) &&
 * 2) ||
 */

// &&는 모두 true여야 true
console.log(true && true);
console.log(true && false);
console.log("---------------")

// ||는 둘 중 하나만 true여도 true
console.log(true || true);
console.log(true || false);
console.log(true || true);
console.log(false || false);
console.log("---------------")

/**
 * 단축 평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log(true && '문유나')
console.log(false && '문유나')
console.log(true || '문유나')
console.log(false || '문유나')

/**
 * 지수 연산자
 */
console.log(2**2);
console.log(10**3);

/**
 * null 연산자
 */
let name;
console.log(name);
name = name ?? '유나';
console.log(name);

let name2;
name2 ??= '유나';
console.log(name2);