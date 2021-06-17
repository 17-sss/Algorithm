// https://leetcode.com/problems/valid-anagram/
// 242. Valid Anagram
// - 매개변수로 받아오는 문자열들이 같은 문자들로 이루어져있는지 확인하는 문제

// 1차시, 통과 성공
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const map = new Map();
    const nMax = s.length;

    // 1) Map에 매개변수 s의 글자들을 분석 (Count++)
    let nIdx = 0;
    while (nIdx < nMax) {
        const sCnt = map.get(s[nIdx]);
        isNull(sCnt) ? map.set(s[nIdx], 1) : map.set(s[nIdx], sCnt + 1);
        nIdx++;
    }

    // 2) 매개변수 t를 기준으로 Map에 있는 글자 Count--
    nIdx = 0;
    while (nIdx < nMax) {
        if (!map.has(t[nIdx])) return false;
        map.set(t[nIdx], map.get(t[nIdx]) - 1);

        if (map.get(t[nIdx]) < 0) return false;
        nIdx++;
    }

    return true;
};
const isNull = (value) =>
    typeof value === 'undefined' || typeof value === 'null';

// isAnagram('anagram', 'nagaram'); // true
isAnagram('aacc', 'ccac'); // false
