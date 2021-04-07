// https://programmers.co.kr/learn/courses/30/lessons/12931
// 자릿수 더하기
const solution = (n) => (""+n).split('').reduce((result, curr) => result + (+curr), 0)