// https://leetcode.com/problems/longest-common-prefix/
/* 
    * 0014. Longest Common Prefix
        Write a function to find the longest common prefix string amongst an array of strings.
        If there is no common prefix, return an empty string ""

        - Example 1:
            Input: strs = ["flower","flow","flight"]
            Output: "fl"

        - Example 2:
            Input: strs = ["dog","racecar","car"]
            Output: ""
            Explanation: There is no common prefix among the input strings.
        
        -- Constraints (제약조건): 
            1) 0 <= strs.length <= 200      [v]
            2) 0 <= strs[i].length <= 200   [v]
            3) strs[i] consists of only lower-case English letters. 
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    if (strs.length < 0 || strs.length > 200) return;

    const standard = strs[0];

    for (let i = 0; i < standard.length; i++) {
        const prefix = standard.slice(0, standard.length - i);

        for (let j = 0; j < strs.length; j++) {
            if (strs[j].length < 0 || strs[j].length > 200) return;

            if (!strs[j].startsWith(prefix)) break;

            if (strs.length - 1 === j) return prefix;
        }
    }
    return '';
}

const strs1 = ['flower', 'flow', 'flight'];
const strs2 = ['dog', 'racecar', 'car'];
console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
