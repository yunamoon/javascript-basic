/**
 * Async / Await
 */

const getPromise = (seconds) => new Promise((resolve, rejcet)=> {
    setTimeout(() => {
        rejcet('에러');
    }, seconds * 1000);
});

async function ruuner ( ) {

    try {
        const result1 = await getPromise(1);
        console.log(result1);
    }catch(e) {
        console.log(e);
    } finally {
        console.log('finally-----')
    }
};

ruuner();