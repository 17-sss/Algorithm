// https://leetcode.com/problems/happy-number/
// Happy Number
/* 
    * 문제 메모
        숫자를 받아와서 한 글자씩 쪼개어 전부 제곱을 계산해주고
        그 계산된 결과값들을 전부 더함.
        더해서 1이 나온다면 Happy Number (true 반환) (나올때까지 반복)
        - 제곱해서 더한 값들이 계속 같은 규칙을 가지면서
            while Loop를 돌고 있다면 HappyNumber가 될 수 없기에 false 반환
*/


// 2차시, 통과 성공 (84ms, faster than 86.28%)
/**
 * @param {number} num
 */
const createSum = (num) =>
    ('' + num).split('').reduce((prev, curr) => prev + curr ** 2, 0);

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = (n) => {
    const arrTemp = [];
    let nTemp = n;

    while (true) {
        nTemp = createSum(nTemp);
        if (nTemp === 1) return true;
        if (arrTemp.indexOf(nTemp) > -1) break;
        arrTemp.push(nTemp);
    }
    return false;
};

isHappy(19);


// ------------------------------------------------------------------------------

// 1차시, 통과 성공 (92ms, faster than 52.19%)
/**
 * @param {number} num
 */
 const createSum = (num) => ("" + num)
    .split('')
    .map((v) => v**2)
    .reduce((prev, curr) => prev + curr);

/**
* @param {number} n
* @return {boolean}
*/
const isHappy = (n) => {
 const arrTemp = [];
 let nTemp = n;

 while (true) {
     nTemp = createSum(nTemp);
     if (nTemp === 1) return true;
     if (arrTemp.indexOf(nTemp) > -1) break;
     arrTemp.push(nTemp);
 }
 return false;
};