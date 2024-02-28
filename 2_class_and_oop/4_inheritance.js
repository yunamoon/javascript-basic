/**
 * Inheritance
 * 
 * 1. 상속
 * 상속은 객체들 간의 관계를 구축하는 방법으로,
 * 수퍼 클래스나 부모 클래스 등 기존의 클래스로부터 속성과 동작을 상속 가능.
 * 
 * super class/parent class
 * --------상속-------------
 * child class
 * 
 */

class basicInfo {
    name;
    year;


    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class Insider extends basicInfo {

    isMember() {
        return '내부 인원입니다.';
    }

}

class Outsider extends basicInfo {

    isMember() {
        return '외부 인원입니다.';
    }

}

const yuna = new Insider('문유나' , 1996)
console.log(yuna, yuna.isMember());

const sena = new Outsider('문세나' , 2001)
console.log(sena , sena.isMember());