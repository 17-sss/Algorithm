// https://leetcode.com/problems/fibonacci-number/
// 509. Fibonacci Number: n의 피보나치 숫자는?

// 1차시, 통과 성공
/**
 * @param {number} n
 * @return {number}
 */
const fib = (n) => {
    if (n === 0) return 0;
    else if (n === 1) return 1;

    const arrFib = [0, 1];
    for (let i = 2; i <= n; i++) {
        const num = arrFib[i - 1] + arrFib[i - 2];
        arrFib.push(num);
        arrFib.shift();
    }
    return arrFib[n];
};
