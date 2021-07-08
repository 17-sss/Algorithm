// 2021.07.08
// (0-1)_Knapsack_Problem 이해하기

/*
- 참고 링크
    1. [Wiki : knapsack problen (배낭 문제)](https://ko.wikipedia.org/wiki/배낭_문제)
    2. [네이버블로그 : 0-1 Knapsack Problem(배낭 문제)](https://m.blog.naver.com/lhm0812/220853228613)
    3. [코없프 : 코딩테스트, 중급, knapsack problem](https://youtu.be/rhda6lR5kyQ)
*/

// [function] DP 배열 생성
const createDPTable = (nObjectCnt, nWeightLimit) => {
    /*
        만들 때 각자 길이를 +1을 하는 이유는
        - 배낭에 비어있을 경우 (주어진 Object(item)가 하나도 없을 때) -> 첫번쨰 Row의 모든 값은 0
        - 아이템들이 주어졌는줄 알았는데 전부 없을 때 -> (Row의 첫번째 Col은 모두 0)
    */
    const arrDP = Array.from({ length: nObjectCnt + 1 }, () =>
        Array.from({ length: nWeightLimit + 1 }, () => null),
    );

    /*
        배낭이 비어있을 경우를 위해 초기화 
        - 이중배열의 첫번째 Row의 모든 Col의 가치(Value)를 0으로 대입
    */
    for (let colIdx = 0; colIdx < nWeightLimit + 1; colIdx++)
        arrDP[0][colIdx] = 0;

    // 아이템들이 주어졌는줄 알았는데 전부 없을 때는 모든 Row의 첫번째 Col은 0임.
    for (let rowIdx = 0; rowIdx < arrDP.length; rowIdx++)
        arrDP[rowIdx][0] = 0;

    return arrDP;
};

// ------

// [function] BottomUp 방식
const knapsack = (objectItems, nWeightLimit) => {
    if (!objectItems || objectItems.length <= 0) return;
    if (nWeightLimit < 0) return;
    const arrDP = createDPTable(objectItems.length, nWeightLimit);

    // arrDP 순회하면서 값 계산 (rowIdx-1 = 가방의 아이템 | colIdx = 가방에서 사용할 수 있는 나머지 무게(용량))
    for (let rowIdx = 1; rowIdx < arrDP.length; rowIdx++) {
        for (let colIdx = 1; colIdx < arrDP[rowIdx].length; colIdx++) {
            const prevRowIdx = rowIdx - 1;
            const prevRowColValue = arrDP[prevRowIdx][colIdx];
            // 가방에 넣을 Item (rowIdx-1 하면 objectItems를 탐색하는 것)
            const { weight, value } = objectItems[rowIdx - 1];

            // 만든 참고 이미지 보기.. (글로쓰기 어려움)
            // https://user-images.githubusercontent.com/33610315/124868251-756fa080-dffa-11eb-8994-e236682d7c09.gif
            let resultValue = 0;
            const prevWeightLimit = colIdx - weight;
            if (prevWeightLimit < 0) resultValue = 0
            else resultValue = arrDP[prevRowIdx][prevWeightLimit] + value;

            arrDP[rowIdx][colIdx] = Math.max(prevRowColValue, resultValue);
        }

    }
    console.log(arrDP);
    return arrDP[objectItems.length][nWeightLimit];
};

// ------

const objectItems = [
    { weight: 1, value: 30 },
    { weight: 2, value: 20 },
    { weight: 3, value: 40 },
    { weight: 4, value: 10 },
];
knapsack(objectItems, 5);