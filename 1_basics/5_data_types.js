/**
 * Data Types
 * 
 * 여섯개의 Primitive 타입과 
 * 한개의 오브젝트 타입이 있습니다.
 * 
 * 1) Number 
 * 2) String
 * 3) Boolean
 * 4) Undefined 
 * 5) Null
 * 6) Symbol 
 * 
 * 7) Object
 *    Function
 *    Array
 *    Object
 */

/**
 * Number
 */
const age = 29;
const pi = 3.14;
console.log(typeof age , typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity , typeof nInfinity);

console.log("---------------------------------")

/**
 * String
 */

const name = '문유나';
console.log(typeof name);

const total = "'문유나', '문유나'";
console.log(total);

const moon = '"문유나", "문유나"';
console.log(moon);

/**
 * Template Literal
 * 
 * Escaping character
 * 1) newLine -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
*/

const yuna = 'moon\nyuna';
console.log(yuna);
const sena = 'moon\tsena';
console.log(sena);
const hanna = 'moon\\hanna';
console.log(hanna);

const test = `"?]2313\\231];"`
console.log(test)

const testName = '문유나';
console.log(`${testName} 입니다.`);

/**
 * Boolean 
 */

const isTrue = true;
const isFasle = false;
console.log(isTrue , isFasle);

/**
 * undefined
 * 사용자가 직접 값을 초기화하지 않았을 때,
 * 지정되는 값.
 * 
 * 직접 undefined로 초기화하는 건...X.
 */

let init;
console.log(init);

/**
 * null
 * 
 * undefined와 마찬가지로 값이 할당되지 않았다는 의미,
 * JS에서는 값이 없다는 걸 명시적으로 초기화 할 때 사용.
 */

let nullInit = null;
console.log(nullInit);
console.log( typeof nullInit);


/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때, 
 * 다른 프리미티브 값과 다르게 Symbol 함수를 호출해 사용.
 */
const test1 = '1';
const test2 = '1';
console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);

/**
 * Object 타입
 * 
 * Map 
 * key : value 쌍으로 이루어짐 
 */

const dic = {
    test : '실험',
    name : '이름',
    moon : '달',
}

const key = 'test';
console.log(dic);
console.log(dic[`${key}`]);
console.log(typeof dic);


/**
 * Array
 * 
 * 값을 list로 나열 가능
 */

const isArray = [
    '노란색',
    '검은색',
    '빨간색',
    '파란색'
]

console.log(isArray);

/**
 * Array - index
 * 0부터 시작 ++
 */
console.log(isArray[0]);
console.log(isArray[3]);

isArray[0] = '초록색';
console.log(isArray);
console.log(typeof isArray);