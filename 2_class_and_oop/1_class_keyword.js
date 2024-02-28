/**
 * Class Keyword
 * 
 * 1. Class
 * 클래스는 객체지향 프로그레밍에서 특정 객체(인스턴스)를 생성하기 위한 
 * 변수와 메소드(함수)를 정의하는 일종의 틀이다.
 * = 정보를 일반화하여 정리하는 방법 
 * = 클래스는 일종의 양식이고, 객체는 양식을 기반으로 실제 구현된 데이터
 */

class DataForm {
    name;
    year;

    // constructor
    constructor(name, year){ 
        this.name = name;
        this.year = year;
    }
}
const yuna = new DataForm('yuna moon' , 1996);
console.log(yuna);
const sena = new DataForm('sana moon' , 2001);
console.log(sena);
console.log("-----------------------------------------");


class DataForm2 {
    constructor(name, year){ 
        this.name = name;
        this.year = year;
    }

    hello() {
    return `안녕하세요 ${this.name}입니다`;
    }
}

const yuna2 = new DataForm2('yuna moon' , 1996);
console.log(yuna2.hello());
const sena2 = new DataForm2('sana moon' , 2001);
console.log(sena2.hello());