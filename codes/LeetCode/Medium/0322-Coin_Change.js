// https://leetcode.com/problems/coin-change/
// 322. Coin Change
/* 
    주어진 동전의 종류 (coins)로 두번째 매개변수 amount가 되려면 
    필요한 최소한의 동전 갯수를 구하는 문제, 없다면 -1
    - Bottom-Up 방식으로 풀기 (0 ~ amount까지 값을 계산하면서 결과 값에 쓰일 배열에 push)
*/
// - 참고 강의: https://youtu.be/N7m44HWa39o

// 1차시, 통과 성공 (난해한 이해.. ㅠ)
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    let nCurrCost = 0;
    const arrCalc = [];

    while (nCurrCost <= amount) {
        if (nCurrCost === 0) {
            arrCalc.push(0);
            nCurrCost++;
            continue;
        }

        const arrCostMinus = coins.map((coin) => {
            const curr = nCurrCost - coin;
            return curr > -1 ? arrCalc[curr] : -1;
        });

        const isEmpty = arrCostMinus.every((v) => v === -1);
        const minCost = isEmpty ? -1 : Math.min(...arrCostMinus.filter((v) => v !== -1)) + 1;
        arrCalc.push(minCost);
        nCurrCost++;
    }
    return arrCalc[arrCalc.length-1];
};

coinChange([2, 3, 5], 10); // 2
