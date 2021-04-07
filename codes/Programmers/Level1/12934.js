// https://programmers.co.kr/learn/courses/30/lessons/12934
// 정수 제곱근 판별
const solution = (n) => n % Math.sqrt(n) === 0 ? ((Math.sqrt(n) + 1) ** 2) : -1;