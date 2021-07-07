// https://leetcode.com/problems/longest-palindromic-substring/
// 5. Longest Palindromic Substring
// 주어진 string s에서, 가장 긴 palindromic substring을 반환하는 문제

// (2021.07.06)
// ETC. 참고한 코드.. 나중에 풀어보기 - 5500ms..?
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    const S_LENGTH = s.length;
    const arrDP = Array.from({ length: S_LENGTH }, () =>
        Array.from({ length: S_LENGTH }, () => 0),
    );

    for (let idx = 0; idx < S_LENGTH; idx++) {
        const currRow = arrDP[idx];
        currRow[idx] = 1;
    }

    for (let idx = 0; idx < S_LENGTH - 1; idx++) {
        const startChar = s[idx];
        const endChar = s[idx + 1];
        if (startChar === endChar) arrDP[idx][idx + 1] = 2;
    }

    for (let idx = 2; idx < S_LENGTH; idx++) {
        let row = 0;
        let col = idx;

        while (col < S_LENGTH) {
            const startChar = s[row];
            const endChar = s[col];
            const prevCnt = arrDP[row + 1][col - 1];

            if (startChar === endChar && prevCnt !== 0)
                arrDP[row][col] = prevCnt + 2;

            row += 1;
            col += 1;
        }
    }

    let maxLength = 0;
    let startIdx = 0;
    let endIdx = 0;

    for (let row = 0; row < S_LENGTH; row++) {
        for (let col = 0; col < S_LENGTH; col++) {
            const currRowColLength = arrDP[row][col];
            if (maxLength < currRowColLength) {
                maxLength = currRowColLength;
                startIdx = row;
                endIdx = col;
            }
        }
    }

    return s.slice(startIdx, endIdx + 1);
};

longestPalindrome('babcc'); // "baab"

// 1차시, 통과 실패..
/*
const longestPalindrome = (s) => {
    const S_LENGTH = s.length;
    const arrDP = Array.from({length: S_LENGTH}, () => Array.from({length: S_LENGTH}, () => -1 ) );

    for (let nRowCol = 0; nRowCol < arrDP.length; nRowCol++) {
        const currRow = arrDP[nRowCol];
        currRow[nRowCol] = 0;
    }

    for (let nRow = 0; nRow < arrDP.length; nRow++) {
        const currRow = arrDP[nRow];
        const currRowStr = s[nRow];
        for (let nCol = (nRow + 1); nCol < currRow.length; nCol++) {
            const currColStr = s[nCol];
            if (currColStr === currRowStr) currRow[nCol] = nCol;
            else currRow[nCol] = -1;
        }  
    }
    
    const valueSet = arrDP.reduce((accu, arr) => {
        arr.forEach((v) => accu.add(v));
        return accu;
    }, new Set());
    const minValue = Math.min(...valueSet.values()) === -1 ? 0 : Math.min(...valueSet.values());
    const maxValue = Math.max(...valueSet.values());

    return s.slice(minValue, maxValue + 1);
};
*/

// =================================================================================================

// (2021.07.05 이전 -> 실패)

/* 
"civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
테스트케이스.. 요고 통과 안댐
*/
/*
const longestPalindrome = (s) => {
    const arrResult = [];

    let nLoopCnt = 0;
    let lastIdx = nLoopCnt + 1;
    while (nLoopCnt !== s.length) {
        const currSubStr = s.substring(nLoopCnt, lastIdx);

        if (arrResult.indexOf(currSubStr) <= -1) arrResult.push(currSubStr);

        if (lastIdx >= s.length) {
            nLoopCnt++;
            lastIdx = nLoopCnt + 1;
        } else lastIdx++;
    }
    const result = arrResult
        .sort((a, b) => b.length - a.length)
        .filter((v) => [...v].reverse().join('') === v);

    return result[0];
};

longestPalindrome(
    'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth',
);
*/