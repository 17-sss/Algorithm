// https://programmers.co.kr/learn/courses/30/lessons/12954
// x만큼 간격이 있는 n개의 숫자
const solution = (x, n) => Array.from({length: n}, (_, i) => x * (i+1));