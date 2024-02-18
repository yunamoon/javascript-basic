/**
 * try...catch
 * 
 * 1) 발생시킬 때, 에러를 던진다고 함 (throw)
 * 2) 에러를 명시적으로 인자할 때, 잡는 다고 함 (catch)
 * 
 */

function runner() {

    try{
        console.log('hello');
        throw new Error('에러 발생~~');
        console.log('javascript');       
    } catch(e) {
        console.log('----catch-----');
        console.log(e);
    } finally {
        console.log('----finally-----');
    }

}
runner();