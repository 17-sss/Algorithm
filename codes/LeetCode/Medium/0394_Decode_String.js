// https://leetcode.com/problems/decode-string/
// decodeString : 문자열 변환

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
