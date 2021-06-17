// https://leetcode.com/problems/first-unique-character-in-a-string/
// 387. First Unique Character in a String
/* 
    단 1번만 나오는 Char의 Index를 반환하는 문제 / 아니라면 -1
    Map 활용!
*/

// 2차시, 통과 성공
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    const map = new Map();
    let nIdx = 0;
    while (s.length > nIdx) {
        const curr = s[nIdx];
        if (map.has(curr)) {
            let cnt = map.get(curr);
            map.set(curr, ++cnt);
        } else map.set(curr, 1);

        nIdx++;
    }

    nIdx = 0;
    while (s.length > nIdx) {
        const curr = s[nIdx];
        if (map.get(curr) === 1) return nIdx;
        nIdx++;
    }
    return -1;
};

firstUniqChar('loveleetcode'); // 2
firstUniqChar('aabb'); // -1
firstUniqChar('dddccdbba'); // 8

// 1차시, 통과 성공
/*
const firstUniqChar = function (s) {
    const map = new Map();
    let nIdx = 0;
    while (s.length > nIdx) {
        const curr = s[nIdx];
        if (map.has(curr)) {
            let cnt = map.get(curr);
            map.set(curr, ++cnt);
        } else map.set(curr, 1);

        nIdx++;
    }

    const minAlpha = [...map.entries()].find((v) => v[1] === 1);
    return minAlpha ? s.split('').indexOf(minAlpha[0]) : -1;
};
*/
