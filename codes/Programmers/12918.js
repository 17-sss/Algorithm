// https://programmers.co.kr/learn/courses/30/lessons/12918
// 문자열 다루기 기본

const solution = (s) => ((s.replace(/([^0-9])/g, '')) === s) && (s.length === 4 || s.length === 6);