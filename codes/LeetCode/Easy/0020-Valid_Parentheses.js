// https://leetcode.com/problems/valid-parentheses/
// 20. Valid Parentheses

// 2차시, 다시 풀어보기
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {

};
isValid('([)]');

// ===========

// 1차시, 통과 성공. (시간복잡도 노답)
const isValid = (s) => {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    let nIdx = 0;
    const arrPush = Object.keys(bracketMap);

    while (nIdx < s.length) {
        const currChar = s[nIdx];
        const isPush = arrPush.indexOf(currChar) > -1;
        if (isPush)
            stack.push(currChar)
        else {
            const stackLastIdx = stack.length - 1;
            const stackLastItem = stack[stackLastIdx];
            const currPopValue = bracketMap[stackLastItem];

            if (currChar === currPopValue) stack.pop();
            else return false;
        }
        nIdx++;
    }
    return stack.length === 0;
};

