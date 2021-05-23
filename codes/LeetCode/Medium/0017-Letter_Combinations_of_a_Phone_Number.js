// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Letter Combinations of a Phone Number: 핸드폰 번호키로 만들 수 있는 문자를 계산하는 문제

// 1차시, 통과 성공
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    const result = [];
    if (!digits) return result;

    const arrNums = [null, null, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const arrDigits = digits.split('').map((v) => +v);

    const dfs = (word, idx) => {
        if (idx < arrDigits.length) {
            const currDigit = arrDigits[idx];
            const currChars = arrNums[currDigit].split('');
            currChars.forEach((char) => dfs(word + char, idx + 1));
        } else result.push(word);
    };

    dfs('', 0);
    return result;
};
