// https://programmers.co.kr/learn/courses/30/lessons/77484
// 로또의 최고 순위와 최저 순위

// 1차시, 통과 성공
function solution(lottos, win_nums) {
    if (lottos.every((v) => !v)) return [1, 6];

    const rankMap = new Map();
    let keyCnt = 1;
    for (let i = 6; i > 0; i--) {
        rankMap.set(keyCnt, i);
        keyCnt++;
    }

    const lottosZeroCnt = lottos.filter((v) => !v).length;
    const lottosInWinNumsCnt = win_nums.reduce(
        (acc, num) => ((acc += Number(lottos.includes(num))), acc),
        0,
    );

    const maxCnt =
        lottosInWinNumsCnt + lottosZeroCnt <= 1
            ? 1
            : lottosInWinNumsCnt + lottosZeroCnt;
    const minCnt = lottosInWinNumsCnt <= 1 ? 1 : lottosInWinNumsCnt;

    return [rankMap.get(maxCnt), rankMap.get(minCnt)];
}