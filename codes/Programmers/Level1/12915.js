// https://programmers.co.kr/learn/courses/30/lessons/12915
// 문자열 내 마음대로 정렬하기

// 2021.02.28 (이해 안감)
// ++ Array.sort에 대해 더 알아보기
const solution = (strings, n) =>
    strings.sort((a, b) => {
        const first = a[n];
        const second = b[n];

        if (first === second) {
            return (a > b) - (a < b);
        } else {
            return (first > second) - (first < second);
        }
    });

solution(["sun", "bed", "car"], 1);     // ["car", "bed", "sun"]
solution(["abce", "abcd", "cdx"], 2);   // ["abcd", "abce", "cdx"]