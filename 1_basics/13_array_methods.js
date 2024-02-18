/**
 * Array Methods
 */

let colors = [
    '빨간색',
    '파란색',
    '검은색',
    '노란색',
    '초록색'
]

console.log(colors);

// push()
colors.push('무지개색');
console.log(colors);
console.log('----------------');

// pop()
console.log(colors.pop());
console.log(colors);
console.log('----------------');

// shift()
console.log(colors.shift());
console.log(colors);

// unshift()
console.log(colors.unshift('무슨색'));
console.log(colors);

console.log(colors.splice(0,3));
console.log(colors);
console.log('----------------');


colors = [
    '빨간색',
    '파란색',
    '검은색',
    '노란색',
    '초록색'
]


// concat()
console.log(colors.concat('하늘색'));
console.log(colors);

// slice()
console.log(colors.slice(0,3));
console.log(colors);

// spread operator
let colors2 = [
    ...colors,
]
console.log(colors2);

let colors3 = colors;
console.log(colors3);

console.log([
    ...colors,
] == colors);

// join()
console.log(colors.join());
console.log(colors.join(''));

// sort()
// 오름차순
colors.sort();
console.log(colors);
console.log(colors.reverse());

let numbers = [
    1,
    2,
    3,
    7,
    8,
    9,
    10,
    4,
    5,
    6,
    
]

console.log(numbers);

/**
 * a,b를 비교했을때
 * 1) a를 b보다 뒤에 정렬하려면 0보다 큰 숫자를 반환
 * 2) a를 b보다 앞에 정렬하려면 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a,b) => {
    return a > b ? 1: -1;
});
console.log(numbers);

numbers.sort((a,b) => {
    return a > b ? -1: 1;
});
console.log(numbers);
console.log('----------------');

// map()
console.log(colors.map((x)=> x));
console.log(colors.map((x)=> `색상 : ${x}`));
console.log(colors.map((x)=> {
    if (x === '검은색') {
        return `${x}는 어울리지 않습니다.`;
    } else {
        return x;
    }
}));
console.log(colors);

// filter()
numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.filter((x)=> x % 2 === 0));

// find()
console.log(numbers.find((x)=> x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x)=> x % 2 === 0));

// reduce()
// reduce( 콜백함수 , 초기값)
console.log(numbers.reduce((p , n) => p+n , 0));