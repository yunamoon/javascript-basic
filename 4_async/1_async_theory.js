/**
 * Asunc Theory
 * 
 */

function longWork() {
    const now = new Date();

    const milliseconds = now.getTime();
    const afterTwoSeconds = milliseconds + 2 * 1000;

    while(new Date().getTime() < afterTwoSeconds) {

    }

    console.log('완료');
};

// console.log('hello');
// longWork();
// console.log('world');

function longWork2() {
    setTimeout(() => {
        console.log('완료')
    }, 2000);
}


console.log('hello');
longWork2();
console.log('world');
