/**
 * class 관련 예제
 * 
 * 1) Country class는 나라 이름과 나라에 해당하는 아이돌 그룹 정보를 리스트로 갖는다.
 *    (name 프로퍼티, idolGroups 프로퍼티)
 * 2) IdolGroup class는 아이돌 그룹의 이름 정보와 멤버 정보를 리스트로 갖는다.
 *    (name 프로퍼티, members 프로퍼티)
 * 3) Idol class는 아이돌 이름과 출생년도 정보를 갖는다.
 *    (name 프로퍼티, year 프로퍼티)
 * 4) MaleIdol class는 Idol class와 동일하게 name, year 프로퍼티가 존재하고
 *    sing(){ return `${이름}이 노래를 합니다`} 함수를 갖는다.
 * 5) FemalIdol class는 Idol class와 동일하게 name, year 프로퍼티가 존재하며,
 *    dance(){ return `${이름}이 춤을 춥니다.`} 함수를 갖는다.
 */

class Country {
    name;
    idolGroups;

    constructor(name, idolGroups) {
        this.name = name;
        this.idolGroups = idolGroups;
    };
};

class IdolGroup {
    name;
    members;

    constructor(name, members) {
        this.name = name;
        this.members = members;
    };

};

class Idol {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    };
};

class MaleIdol extends Idol {

    sing(){ 
     return `${this.name}이 노래를 합니다`
    }
}

class FemaleIdol extends Idol {

    sing(){ 
     return `${this.name}이 춤을 춥니다`
    }
}

const femaleIdolMembers = [
    {
        name : '아무개',
        year : 2001,
    },
    {
        name : '홍길동',
        year : 2005,
    },
    {
        name : '들장미',
        year : 1998,
    },
    {
        name : '어이쿠',
        year : 2010,
    },
    {
        name : '짱이다',
        year : 1997,
    },
    {
        name : '나이가',
        year : 2010,
    },

]

const maleIdolMembers = [
    {
        name : 'ooo',
        year : 2001,
    },
    {
        name : 'ooo',
        year : 2005,
    },
    {
        name : 'ooo',
        year : 1998,
    },
    {
        name : 'ooo',
        year : 2010,
    },
    {
        name : 'ooo',
        year : 1997,
    },
    {
        name : 'ooo',
        year : 2010,
    },

]

const cfemaleIdolMembers =femaleIdolMembers.map(
    (x) => new FemaleIdol(x['name'] , x['year']),
);

const cmaleIdolMembers = maleIdolMembers.map(
    (x) => new MaleIdol(x['name'] , x['year']),
);


console.log(cfemaleIdolMembers);
console.log(cmaleIdolMembers);

const femaleIdolGroups = new IdolGroup (
    '여자 아이돌',
    femaleIdolMembers,
)
console.log(femaleIdolGroups);

const maleIdolGroups = new IdolGroup (
    '남자 아이돌',
    maleIdolMembers,
)
console.log(maleIdolGroups);

const korea = new Country (
    '한국',
    [   
        femaleIdolGroups,
        maleIdolGroups,
    ]

);

console.log(korea);

const all = new Country (
    '대한민국',
    [
        new IdolGroup (
            '여자 아이돌',
            femaleIdolMembers.map(
                (x) => new FemaleIdol(x['name'] , x['year'])
            )
        ),
    
        new IdolGroup (
            '남자 아이돌',
            maleIdolMembers.map(
                (x) => new MaleIdol(x['name'] , x['year'])
            )
        )
        
    ]
)
console.log(all);