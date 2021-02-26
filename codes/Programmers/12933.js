// https://programmers.co.kr/learn/courses/30/lessons/12933
// 정수 내림차순으로 배치하기
const solution = (n) => parseInt((""+n).split('').sort((a,b) => b - a).join('')) ;