// https://leetcode.com/problems/add-strings/
// 415. Add Strings
/* 
    + 코드 설계
        - 예) num1[lastIdx] + num2[lastIdx] 할때 만약 8 + 7 이라면
            carry 값은 1 (15/10)
            임시 결과 값에 들어갈 값은 5(15 % 10)
            (반복)

        - 결과값 계산할때 한글자씩 뒤에 붙이기 (push)
        - 결과 return시 reverse
*/

// 1차시
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// const addStrings = (num1, num2) => (parseInt(num1) + parseInt(num2)) + '';  // 안됨

const addStrings = (num1, num2) => {
    const nMaxLength = Math.max(num1.length, num2.length);
    if (!nMaxLength) return;

    num1 = num1.padStart(nMaxLength, '0');
    num2 = num2.padStart(nMaxLength, '0');

    let resultTmp = '';
    let carry = 0;
    let nLoop = 0;
    let currIdx = nMaxLength - 1;

    while (nLoop < nMaxLength && currIdx > -1) {
        const value1 = Number(num1[currIdx]);
        const value2 = Number(num2[currIdx]);
        const sum = value1 + value2 + carry;
        resultTmp += sum % 10;
        carry = Math.floor(sum / 10);

        nLoop++;
        currIdx--;
    }
    carry !== 0 && (resultTmp += carry);

    // 배열 reverse쓰면 아찔..
    let result = '';
    let nReverse = resultTmp.length - 1;
    while (0 <= nReverse) {
        result += resultTmp[nReverse];
        nReverse--;
    }

    return result;
};

addStrings('11', '123'); // "134"
// addStrings("9333852702227987", "85731737104263"); // "9419584439332250"
// addStrings("1", "9"); // "10"
