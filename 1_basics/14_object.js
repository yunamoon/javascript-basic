/**
 * Object 객체
 */

//key:value pair
let member = {
    name : '문유나',
    group : '없음',
    job : function() {
        return `FE 개발자 ${this.name}`;
    }
}

console.log(member['name']);

const key = 'name';
console.log(member[key]);
console.log(member.job());
console.log('----------------------');

const nameKey = 'name';
const nameValue = '문유나';

const groupKey = 'group';
const groupValue = '없음';

const member2 = {
    [nameKey] : nameValue,
    [groupKey] : groupValue,
    job : function() {
        return `FE 개발자 ${this.name}`;
    }
}

console.log(member2);

member2['group'] = '어딘가';
console.log(member2);
member2['age'] = 28;
console.log(member2);

delete member2['age'];
console.log(member2);

/**
 * object의 특징
 * 
 * 1) const로 선언할 경우 객체 자체는 변경할 수 없다.
 * 2) 객체 내의 프로퍼티나 메서드는 변경 가능하다.
 */


// key 값 가지고 오기
console.log(Object.keys(member2));

// value 값 가지고 오기
console.log(Object.values(member2));

const name = '문유나';
const test = {
    name
}
console.log(test);