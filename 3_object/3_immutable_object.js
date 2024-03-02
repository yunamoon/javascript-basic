/**
 * Immutable Object

 */

const yuna = {
    name : '문유나',
    year : 1996,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuna);

/**
 * Extensible
 */
console.log(Object.isExtensible(yuna));
yuna['team'] = '무소속';
console.log(yuna);
Object.preventExtensions(yuna);
yuna['state'] = 'notbed';
console.log(yuna);
delete yuna['team'];
console.log(yuna);
console.log("---------------------------------------");

/**
 * Seal
 */
const yuna2 = {
    name : '문유나',
    year : 1996,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuna2);
console.log(Object.isSealed(yuna2));
Object.seal(yuna2);
console.log(Object.isSealed(yuna2));
yuna2['team'] = '무소속';
console.log(yuna2);
delete yuna2['name'];
console.log(yuna2);

Object.defineProperty(yuna2 , 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuna2, 'name'));
console.log("---------------------------------------");

/**
 * Freezed 
 * 
 * 읽기 외 모든 기능을 false
 */
const yuna3 = {
    name : '문유나',
    year : 1996,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.isFrozen(yuna3));
Object.freeze(yuna3);
console.log(Object.isFrozen(yuna3));
yuna3['team'] = '무소속';
console.log(yuna3);

delete yuna3['name'];
console.log(yuna3);

// Object.defineProperty(yuna3, 'name', {
//     value : '문유나?'
// });
// console.log(yuna3);
console.log(Object.getOwnPropertyDescriptor(yuna3, 'name'));