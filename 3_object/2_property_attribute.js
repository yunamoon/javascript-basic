/**
 * Property Attribute
 * 
 * 1) Data Property
 *  key:value로 형성된 실질적 값을 가지고 있는 프로퍼티
 * 2) Access Property
 *  자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 생성할때 호출되는 함수로 구성된 프로퍼티
 *  getter, setter 
 */

const yuna = {
    name : '문유나',
    year : 1996
}

/**
 * 1) value
 *  실제 프로퍼티의 값
 * 2) writable
 *  값의 수정 가능 여부
 *  false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable
 *  열거의 가능 여부
 *  for...in loop을 통해 사용 가능하며, true를 반환
 * 4) configurable
 *  프로퍼티 어트리뷰트의 재정의 가능 여부
 *  false일 경우 프로퍼티 삭제나 어트리뷰트 변경 금지
 *  writable이 true인 경우 값 변경과 writavle을 변경하는 건 가능
 */

console.log(Object.getOwnPropertyDescriptor(yuna, 'name'));
console.log(Object.getOwnPropertyDescriptor(yuna, 'year'));
console.log(Object.getOwnPropertyDescriptors(yuna));

const sena = {
    name : '문세나',
    year : 1996,

    get age() {
        return new Date().getFullYear() - this.year;
    },

    set age(age) {
        this.age = new Date().getFullYear() - age;
    }
}

Object.defineProperty(sena , 'team' , {
    value : '무소속',
    writable : true,
    enumerable : true,
    configurable:true,
});

console.log(sena);
console.log(Object.getOwnPropertyDescriptors(sena));