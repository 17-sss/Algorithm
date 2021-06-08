// https://leetcode.com/problems/decode-string/
// decodeString : 문자열 변환

// (2021.06.08) : 괄호가 보인다면 stack approach를 생각해본다.
/*
    ** 시나리오 **

    - 문자 전용 Stack / Count 전용 Stack 생성
    - 하나의 포인터로 인자로 들어온 값(문자열)을 순회
    - 문자면 문자용 Stack에, 숫자면 숫자 전용 Stack에 push
    - `[` 면 문자용 스택에 비어있는 문자 `''`를 push
    - `]` 면 문자용 스택 & 숫자용 스택의 top에 있는 것들을 pop하여 문자 계산
*/
// 4차시, 통과 성공
const decodeString = (s) => {
    const stack = [];
    const cntStack = [];
    let strNum = '';
    let nIdx = 0;

    while (nIdx < s.length) {
        const curr = s[nIdx];

        if (isAlpha(curr)) {
            !nIdx && stack.push('');
            stack[stack.length - 1] = stack[stack.length - 1] + curr;
        } else if (isNum(curr)) strNum += curr;
        else if (curr === '[') {
            stack.push('');
            strNum && (cntStack.push(strNum), (strNum = ''));
        } else if (curr === ']') {
            const char = stack.pop();
            const num = cntStack.pop();

            !stack.length && stack.push('');
            num > 0 && (stack[stack.length - 1] += char.repeat(num));
        }
        nIdx++;
    }
    return stack[0];
};

const isNum = (char) => /\d/g.test(char);
const isAlpha = (char) => typeof char !== 'undefined' && /[a-zA-Z]/g.test(char);

// console.log(decodeString('2[abc]3[cd]ef'));
console.log(decodeString('3[z]2[2[y]pq4[2[jk]e1[f]]]ef'));  // "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef"

// 3차시, 통과 실패
/*
const decodeString = (str) => {
    const stack = [];
    const countStack = [];
    let strChar = '';
    let strNum = '';

    let nIdx = 0;
    while (str.length > nIdx) {
        const curr = str[nIdx];
        if (isNum(curr)) {
            strNum += curr;
            isNum(str[nIdx + 1]) || (countStack.push(strNum), (strNum = ''));
        } else if (isAlpha(curr)) {
            strChar += curr;
            isAlpha(str[nIdx + 1]) || (stack.push(strChar), (strChar = ''));
            // } else if (curr === '[') {
        } else if (curr === ']') {
            const char = stack.pop();
            const num = countStack.pop();

            if (!stack.length) stack.push('');
            stack[stack.length - 1] += char.repeat(num);
        }
        nIdx++;
    }
    return (stack.length > 0) ? stack.join('') : stack[0];
};

const isNum = (char) => /\d/g.test(char);
const isAlpha = (char) => (typeof char !== "undefined") && /[a-zA-Z]/g.test(char);

// decodeString('3[a]2[bc]');
decodeString('2[abc]3[cd]ef');
*/

// 2차시, 통과 실패
/*
const decodeString = (str) => {
    const stack = [];
    const countStack = [];

    let nIdx = 0;
    let strNum = '';
    let strStr = '';

    let result = '';

    while (str.length > nIdx) {
        const curr = str[nIdx];
        if (isNum(curr)) strNum += curr;
        else if (curr === '[') {
            strNum && countStack.push(strNum);
            strNum && (strNum = '');
            strStr && stack.push(strStr);
            strStr && (strStr = '');
        } else if (curr === '['){
            strStr && stack.push(strStr);
            strStr && (strStr = '');

            const cnt = countStack.pop();
            const currStr = stack.pop().repeat(cnt);

            result += currStr;
        } else strStr += curr;

        nIdx++;
    }
    console.log(result);
    return result;
};
const isNum = (char) => /\d/g.test(char);

// decodeString('3[a]2[bc]');
// decodeString('23[a100[def]42[b]]');
*/

// 1차시, 통과 실패
/*
const decodeString = (str) => {
    const stack = [];
    const countStack = [];

    let nIdx = 0;
    let strNum = '';
    let strStr = '';
    while (str.length > nIdx) {
        const curr = str[nIdx];

        switch (curr) {
            case '[': {
                strNum && countStack.push(strNum);
                strNum && (strNum = '');
                strStr && stack.push(strStr);
                strStr && (strStr = '');
                break;
            }
            case ']': {
                strStr && stack.push(strStr);
                strStr && (strStr = '');
                break;
            }
            default: {
                if (isNum(curr)) strNum += curr;
                else  strStr += curr;
                break;
            }
        }
        nIdx++;
    }

    let result = '';
    while (countStack.length > 0) {
        const cnt = countStack.pop();
        const currStr = stack.pop().repeat(cnt);
        (stack.length > 0) ? (stack[stack.length-1] += currStr) : (result = currStr);
    }
    return result;
};

const isNum = (char) => /\d/g.test(char);

// decodeString('3[a2[c]]');
decodeString("3[a]2[bc]");

decodeString('23[a100[def]42[b]]');
*/

// ===============================================================
/*
// (2021.05.08)
// 2차시, 정규표현식 풀이. 풀었는데 음..
const decodeString = (str) => {
    let result = str;

    while (result.match(/[0-9]/g)) {
        result = result.replace(/[0-9]+\[[a-z]+\]/g, (currStr) => {
            const nLoop = currStr.match(/[0-9]+/g)[0];
            const str = currStr.match(/\[[a-z]+\]/g)[0].replace(/\[|\]/g, '');

            let resultStr = '';
            for (let i = 0; i < nLoop; i++) resultStr += str;
            return resultStr;
        });
    }

    return result;
};

// console.log(decodeString('3[a]2[bc]')); // "aaabcbc"
console.log(decodeString('3[a2[c]]')); // "accaccacc"
// console.log(decodeString('2[abc]3[cd]ef')); // "abcabccdcdcdef"
// console.log(decodeString('abc3[cd]xyz')); // "abccdcdcdxyz"
*/

// 1차시, JSON Parser 만드는 것처럼 만드려다 포기
/*
const isNum = (str) => /[0-9]/.test(str);
const isBracket = (str) => /\[|\]/.test(str);
// const isBracketClose = (str) => /\]/.test(str);

const decodeString = (str) => {
    const decode = (arrStr, resultStr = '', loopCnt = null) => {
        while (arrStr.length > 0) {
            const current = arrStr.shift();
            if (isNum(current)) {
                let temp = decode(arrStr, resultStr, Number(current));
            } else if (isBracket(current)) {
            } else {
                resultStr += current;
            }
        }

        return resultStr;
    };

    const arrStr = str.split('');
    return decode([...arrStr]);
};
*/
