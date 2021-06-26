// https://programmers.co.kr/learn/courses/30/lessons/77884
// 약수의 개수와 덧셈

function solution(left, right) {
    // + 약수를 구할 때 기준 숫자가 13이라면 1~13(i)까지 순회하며 13 / i 했을 때 i로 나누어서 나머지가 남지 않는다면 약수
    const getFactorCnt = (num) => {
        let result = 0;
        for (let i = 1; i <= num; i++) if (num % i == 0) result++;
        return result;
    };

    const absCnt = Math.abs(right - left);

    if (absCnt === 0) return getFactorCnt(left) % 2 === 0 ? left : left * -1;

    const nums = Array.from({ length: absCnt + 1 }, (_, i) => left + i);
    const result = nums.reduce((result, num) => {
        getFactorCnt(num) % 2 === 0 ? (result += num) : (result += num * -1);
        return result;
    }, 0);

    return result;
}
