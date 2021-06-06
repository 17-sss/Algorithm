// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// 3. Longest Substring Without Repeating Characters

// 2차시, 통과 성공 (제쓴 감사합니다..) (이해해보기)
// 시간 O(n) / 공간 O(m) (테이블 O(26) => O(1))
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    // 'abcdeca' -> 5
    // "pwwkew" -> 3 (4)
    const alphaMap = createAlphaMap(s);
    let maxLength = 0;
    let begin = 0,
        finish = 0;

    while (finish < s.length) {
        const currChar = s[finish];

        const beginNextIdx = alphaMap[currChar] + 1;
        if (begin+1 <= beginNextIdx) begin = beginNextIdx;

        const tmpLength = (finish - begin) + 1;
        maxLength = Math.max(tmpLength, maxLength);
        alphaMap[currChar] = finish;

        finish++;
    }
    return maxLength;
};

lengthOfLongestSubstring('pwwkew');

// --
const createAlphaMap = () => {
    const result = {};
    const nStartLowerCase = 97;
    const alphaRange = 25;
    const max = nStartLowerCase + alphaRange;
    for (let i = nStartLowerCase; i <= max; i++) {
        const alpha = String.fromCharCode(i);
        result[alpha] = -1;
    }
    return result;
};

// 1차시, 통과 실패
/*
const lengthOfLongestSubstring = (s) => {
    // 'abcdeca'
    const alphaMap = createAlphaMap(s);
    let maxLength = 0;
    let begin = 0,
        finish = 0;

    while (finish < s.length) {
        const currChar = s[finish];

        if (alphaMap[currChar] !== -1) {
            const beginNextIdx = alphaMap[currChar] + 1;
            if (s[beginNextIdx]) begin = beginNextIdx;

            const tmpLength = (finish - begin) + 1;
            maxLength = Math.max(tmpLength, maxLength);
        } else maxLength++;

        alphaMap[currChar] = finish;

        finish++;
    }
    return maxLength;
};
*/ 

// ========== 공통 START

/*
// Object
const createAlphaMap = () => {
    const result = {};
    const nStartLowerCase = 97;
    const alphaRange = 25;
    const max = nStartLowerCase + alphaRange;
    for (let i = nStartLowerCase; i <= max; i++) {
        const alpha = String.fromCharCode(i);
        result[alpha] = -1;
    }
    return result;
};
*/

/*
// Map
const createAlphaMap = (s) => {
    const map = new Map();
    let nLoop = 0;
    while (nLoop < s.length) {
        map.set(s[nLoop], -1);
        nLoop++;
    }
    return map;
};
*/

// ========== 공통 END

