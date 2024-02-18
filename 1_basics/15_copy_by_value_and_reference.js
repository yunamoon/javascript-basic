/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive는 copy by value
 * 2) 객체는 copy by reference
 */

// copy by value 
let original = '안녕하세요';
let clone = original;
console.log(original);
console.log(clone);
console.log('-------------------');

clone += '문유나입니다?';
console.log(original);
console.log(clone);

// copy by reference
let originalObj = {
    name : '문유나',
    age : 28
};

let cloneObj = originalObj;
console.log(originalObj);
console.log(cloneObj);
console.log('-------------------');

cloneObj['group'] = '없음';
console.log(originalObj);
console.log(cloneObj);
console.log('-------------------');

const member1 = {
    name : '문유나',
    age : 28
}
const member2 = member1;

const member3 = {
    name : '문유나',
    age : 28
}

console.log(member1 === member2); // true
console.log(member1 === member3); // false
console.log(member2 === member3); // false

/**
 * Spread Operator
 */
const member4 = {
    ...member3,
};
console.log(member4)
console.log(member3 === member4)
