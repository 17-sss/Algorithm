// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
// 1209. Remove All Adjacent Duplicates in String II

// 1차시, 통과 성공
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = (s, k) => {
    const stack = [];
    const countStack = [];

    let nIdx = 0;
    while (nIdx < s.length) {
        const stackLast = stack[stack.length - 1];
        if (stackLast === s[nIdx]) {
            if (k - 1 === countStack[countStack.length - 1]) {
                for (let i = 0; i < k - 1; i++) stack.pop();
                countStack.pop();
            } else {
                stack.push(s[nIdx]);
                countStack[countStack.length - 1]++;
            }
        } else {
            stack.push(s[nIdx]);
            countStack.push(1);
        }
        nIdx++;
    }

    return stack.join('');
};
