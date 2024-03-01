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