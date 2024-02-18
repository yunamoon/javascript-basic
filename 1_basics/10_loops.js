/**
 * Loops 
 * 
 * 1) for
 * 2) while 
 * 
 */

for(let i = 0 ; i < 10 ; i++ ) {
    console.log(i);
}


for(let i = 10 ; i > 0 ; i-- ) {
    console.log(i);
}


for(let i = 0 ; i < 3; i++ ) {
    for(let j = 3 ; j > 0 ; j-- ) {
        console.log(i, j);
    }
}

// *을 이용한 6x6 정사각형
let star = ''

for(let i = 0; i < 6; i++) {
    for(let j = 0; j <6; j++) {
    star += "*";
    }
    star += "\n";
}
console.log(star);
console.log('----------------')


/**
 * for...in
 */

const name = {
    yuna : "moon",
    year : 1996,
}

for(let key in name) {
    console.log(key)
}
console.log('----------------')

const nameArray = ['yuna' ,'sena', 'hanna'];
for (let key in nameArray) {
    console.log(key);
    console.log(`${key}:${nameArray[key]}`);
}
console.log('----------------')

/**
 * for...of
 */
for(let key of nameArray) {
    console.log(key)
}
console.log('----------------')

/**
 * while
 */
let number = 0;

while( number < 10) {
    number++;
    console.log(number);
}   

/**
 * do...while
 */

number = 0;
do {
    number++;
} while (number < 10);

/**
 * break
 */
for(let i =0 ; i <10 ; i++) {
    if(i===5) {
    break;
    }
    console.log(i);
}

number = 0;

while(number<10) {
    if(number ===5) {
        break;
    }
    number++;
    console.log(number);
}
console.log('----------------')

/**
 * continue
 */
for(let i =0; i< 20; i++) {
    if(i===5) {
        continue;
    }
    console.log(i);
}
console.log('----------------')
number = 0;
while(number < 10) {
    number++;
    if(number===5) {
        continue;
    }
    console.log(number);
}