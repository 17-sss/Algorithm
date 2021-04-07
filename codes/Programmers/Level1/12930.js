// https://programmers.co.kr/learn/courses/30/lessons/12930
// 이상한 문자 만들기

const { log } = console;

// 1차시, 통과 성공 (프로그래머스에 올라감)
const solution = (aStr) =>
    aStr
        .split(' ')
        .map((v) =>
            [...v].map((v2, i) =>
                i % 2 === 0 ? v2.toUpperCase() : v2.toLowerCase(),
            ).join(''),
        ).join(' ');

log(solution('try hello world'));
