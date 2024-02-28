/**
 * Static Keyword
 */

class DataForm {
    name;
    year;
    static team = '무소속';

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static teamName() {
        return '어딘가?';
    }
 }

const yuna = new DataForm('yuna moon' , 1996);
console.log(yuna);
console.log(DataForm.team);
console.log(DataForm.teamName());
console.log("-----------------------------------------");

/**
 * Factory constructor
 */
class DataForm2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object) {
        return new DataForm2 (
            object.name,
            object.year
        );
    }

    static formList(list)  {
        return new DataForm2 (
            list[0],
            list[1]
        )
    }
}

const name2 = DataForm2.fromObject({
    name : 'yuna moon~?',
    year : 1996
});
console.log(name2);

const name3 = DataForm2.formList(
    [
        '문유나',
        1996
    ]
);
console.log(name3);