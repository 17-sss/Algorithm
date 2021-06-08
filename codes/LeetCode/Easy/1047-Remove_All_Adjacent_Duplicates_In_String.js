// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
// 1047. Remove All Adjacent Duplicates In String

// 1차시, 통과 성공
/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicates = (s) => {
    const stack = [];
    let nIdx = 0;
    while (nIdx < s.length) {
        if (stack[stack.length - 1] === s[nIdx]) stack.pop();
        else stack.push(s[nIdx]);
        nIdx++;
    }
    return stack.join('');
};
