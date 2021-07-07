// https://leetcode.com/problems/word-break/
// 139. Word Break
// 주어진 string s를 wordDict 만으로 만들 수 있는지 판별하여라

// 참고, 이해하기..
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
    const S_LENGTH = s.length;
    const wordSet = new Set(wordDict);
    const arrDP = Array(S_LENGTH + 1).fill(false);
    arrDP[0] = true;

    for (let i = 1; i < arrDP.length; i++) {
        for (const word of wordSet) {
            const WORD_LENGTH = word.length;
            const prevIdx = i - WORD_LENGTH;
            if (prevIdx < 0 || !arrDP[prevIdx]) continue;

            const checkWord = s.slice(prevIdx, i);

            if (checkWord === word) {
                arrDP[i] = true;
                break;
            }
        }
    }
    return arrDP[arrDP.length-1];
};

wordBreak('nocope', ['e', 'no', 'cop']);

// 1차시, 연구.. 보류 - 실패 ===================================
/*
const wordBreak = (s, wordDict) => {
    const S_LENGTH = s.length;
    const arrCheck = Array(S_LENGTH + 1).fill(false);
    arrCheck[0] = true; // 위치: 0 ("" => true)

    for (let i = 1; i < arrCheck.length; i++) {
        const currStr = s.slice(0, i);

        for (let j = currStr.length-1; j >= 0; j--) {
            const currSubStr = currStr.slice(j, currStr.length);
            let isOK = false;

            for (let k = 0; k < wordDict.length; k++) {
                const word = wordDict[j];

                if (currSubStr === word) {
                    arrCheck[i] = true;
                    isOK = true;
                    break;
                };
            }

            if (isOK) break;
        }

        // -- 다른 코드 (백업용) ---------------
        // for (let j = 0; j < wordDict.length; j++) {
        //     const word = wordDict[j];
        //     const WORD_LENGTH = word.length;

        //     if (currStr.length !== WORD_LENGTH)
        //         arrCheck[i] = false;
        //     else {
        //         const isSame = currStr === word;
        //         if (isSame) {
        //             arrCheck[i] = true;
        //             break;
        //         }

        //         const prevCheck = arrCheck[i - WORD_LENGTH] && isSame;
        //         if (prevCheck) {
        //             arrCheck[i] = prevCheck; // true
        //             break;
        //         }
        //     }
        // }
        // -- 다른 코드 (백업용) --------------- END
    }

    console.log(arrCheck);
};
*/
