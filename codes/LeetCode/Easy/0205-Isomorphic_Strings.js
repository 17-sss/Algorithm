// https://leetcode.com/problems/isomorphic-strings/
// 205. Isomorphic Strings
/*
    매개변수로 받아오는 s와 t가 같은 규칙을 가지며 써지고 있는지 확인하는 문제 (?)
    - 코딩해보니 두 매개변수 모두 Map이 필요할 듯
*/

// 1차시, 통과 성공
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    if (s.length !== t.length) return false;

    const map1 = new Map();
    const map2 = new Map();

    let nIdx = 0;
    while (nIdx < s.length) {
        const sChar = s[nIdx];
        const tChar = t[nIdx];

        if (map1.has(sChar) || map2.has(tChar)) {
            const v1 = map1.get(sChar);
            const v2 = map2.get(tChar);
            if (v1 !== tChar || v2 !== sChar) return false;
        } else {
            map1.set(sChar, tChar);
            map2.set(tChar, sChar);
        }
        nIdx++;
    }
    return true;
};

// isIsomorphic('egg', 'add'); // true
// isIsomorphic('foo', 'bar'); // false
isIsomorphic('badc', 'baba'); // false
