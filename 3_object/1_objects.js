/**
 * Objects
 * 
 * 객체를 선언할 때 사용 가능한 방법.
 * 1) object를 생성해서 개체 생성 = {}
 * 2) class를 인스턴스화해서 생성 = class and oop
 * 3) function을 사용해서 객체 생성
 */

const yuna = {
    name : '문유나',
    year : 1996,
}
console.log(yuna);

class DataForm{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
 }
 console.log(new DataForm('문세나',2001));

 // 생성자 함수
 function DataFunction(name, year){
    this.name = name;
    this.year = year;
 }
 const sena = new DataFunction('문세나', 2010);
 console.log(sena);