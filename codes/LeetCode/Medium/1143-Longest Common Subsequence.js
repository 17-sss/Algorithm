// https://leetcode.com/problems/longest-common-subsequence/
// 1143. Longest Common Subsequence
// text1과 text2의 longest common subsequence의 길이를 구해라

//  1차시, 통과 성공
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = (text1, text2) => {
    if (text1.length <= 0 || text2.length <= 0) return 0;

    const maxRowCnt = text1.length + 1;
    const maxColCnt = text2.length + 1;

    const arrDP = Array.from({ length: maxRowCnt }, () =>
        Array.from({ length: maxColCnt }, () => 0),
    );

    let currValue;
    for (let nRow = 1; nRow < maxRowCnt; nRow++) {
        const text1Char = text1[nRow - 1];
        for (let nCol = 1; nCol < maxColCnt; nCol++) {
            const text2Char = text2[nCol - 1];
            if (text1Char === text2Char) {
                const prevRowColValue = arrDP[nRow - 1][nCol - 1] + 1;
                currValue = prevRowColValue;
            } else {
                const prevRowValue = arrDP[nRow - 1][nCol];
                const prevColValue = arrDP[nRow][nCol - 1];
                currValue = Math.max(prevRowValue, prevColValue);
            }

            arrDP[nRow][nCol] = currValue;
        }
    }

    return arrDP[maxRowCnt - 1][maxColCnt - 1];
};
console.log(longestCommonSubsequence('abdcg', 'bdag'));
