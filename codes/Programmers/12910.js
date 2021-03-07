// https://programmers.co.kr/learn/courses/30/lessons/12910
// 나누어 떨어지는 숫자 배열
const solution = (arr, divisor) => {
    let result = arr.filter((v) => v % divisor === 0).sort((a,b) => a - b);
    return result.length <= 0 ? [-1] : result;
}