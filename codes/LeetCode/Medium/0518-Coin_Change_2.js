// https://leetcode.com/problems/coin-change-2/
// 518. Coin Change 2 (knapsack 문제의 변형)
// coins에 들어있는 종류의 갯수가 무제한 있을때, amount를 만들수있는 조합의 갯수를 구하라.

// 2차시, 통과 성공
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = (amount, coins) => {
    const arrDP = Array.from({ length: coins.length + 1 }, () =>
        // 각 행의 첫번째 값은 1개 (sum => 0을 만들 수 있는 경우는 주어진 코인 종류들만 있는 경우
        // (즉 코인 종류는 있는데 코인 안줌!! 코인 없어!!))
        // 나머지는 0으로 초기화
        // 첫번째 행은 첫번째 값 제외하곤 0 (코인 종류도 주어지지 않았을 경우)
        Array.from({ length: amount + 1 }, (_, i) => (i === 0 ? 1 : 0)),
    );

    for (let rowIdx = 1; rowIdx < arrDP.length; rowIdx++) {
        const prevRowIdx = rowIdx - 1;
        const prevRow = arrDP[prevRowIdx];
        const currCoin = coins[rowIdx - 1]; // tmpColValue를 계산하기 위해서는 colIdx - rowIdx가 아닌 현재 코인만큼 빼줘야함!

        for (let colIdx = 1; colIdx < amount + 1; colIdx++) {
            const tmpColValue = arrDP[rowIdx][colIdx - currCoin];
            const prevRowColValue = prevRow[colIdx];
            arrDP[rowIdx][colIdx] = // 바로 이전 행의 colIdx에 있는 값과 현재 행의 "colIdx - 코인 값"에 있는 값을 합쳐주어 대입
                (typeof tmpColValue === 'undefined' || tmpColValue < 0
                    ? 0
                    : tmpColValue) + prevRowColValue;
        }
    }

    return arrDP[arrDP.length - 1][amount];
};

change(5, [1, 2, 5]);

// 1차시, 통과 실패
/*
const change = (amount, coins) => {
    const arrDP = Array.from({ length: coins.length + 1 }, () =>
        Array.from({ length: amount + 1 }, (_, i) => (i === 0 ? 1 : 0)),
    );

    for (let rowIdx = 1; rowIdx < arrDP.length; rowIdx++) {
        const prevRowIdx = rowIdx - 1;
        const prevRow = arrDP[prevRowIdx];

        for (let colIdx = 1; colIdx < amount + 1; colIdx++) {
            const tmpColValue = arrDP[rowIdx][colIdx - rowIdx];
            const prevRowColValue = prevRow[colIdx];
            arrDP[rowIdx][colIdx] =
                (typeof tmpColValue === 'undefined' || tmpColValue < 0
                    ? 0
                    : tmpColValue) + prevRowColValue;
        }
    }

    return arrDP[arrDP.length-1][amount];
};

change(5, [1, 2, 5]);
*/
