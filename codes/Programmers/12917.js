// https://programmers.co.kr/learn/courses/30/lessons/12917
// 문자열 내림차순으로 배치하기
const solution = (s) => s.split('').sort((a, b)=> ( b.charCodeAt() - a.charCodeAt() )).join('');    