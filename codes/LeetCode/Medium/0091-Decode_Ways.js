// https://leetcode.com/problems/decode-ways/
// 91. Decode Ways: 들어오는 숫자로 된 문자열을 디코딩 하는 방법의 갯수를 계산하는 문제

// 1차시, 통과 성공 (조금 참고 함.. 어렵다..ㅠ)
/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
    const strSize = s.length;
    if (strSize === 0) return 0;

    // 1. 숫자로 인해 변환되는 알파벳은 그저 페이크인듯. 쓸모없음. Set으로 1~26 범위까지 만들어주기.
    const numSet = new Set();
    for (let i = 1; i <= 26; i++) numSet.add(i.toString());

    // 2. 숫자열(숫자로 이루어진 문자열)의 길이만큼 null이 들어간 배열을 만들어줌.
    const result = Array(strSize).fill(null);

    // 3. Bottom-up 방식으로 디코딩 케이스 (카운팅) 계산

    // 1) 맨 뒤 첫글자가 디코딩이 되는지 확인. 디코딩된다면 result[strSize - 1] 위치의 값에 1 대입.
    const oneChar = s[strSize - 1];
    result[strSize - 1] = Number(numSet.has(oneChar));

    // 2) 맨 뒤 두글자 계산
    const twoChar = s[strSize - 2] + s[strSize - 1];
    result[strSize - 2] =
        // 2-1) strSize - 2 위치의 숫자가 numSet에 존재한다면 맨 뒤 첫글자의 디코딩 케이스 값을 대입. 
        //      아니라면 0 (0일 경우는 strSize - 2 위치의 문자가 "0"이 아니라면 해당됨)
        (numSet.has(s[strSize - 2]) ? result[strSize - 1] : 0) +
        Number(numSet.has(twoChar)); // 2-2) 맨 뒤 두글자가 디코딩이 되는지 확인.
                                     //      디코딩된다면 1을 추가하여 2-1) 의 값과 더하여 result[strSize - 2]에 대입.

    // 3) 맨 뒤 첫글자 & 두글자의 디코딩 케이스는 계산했으니 그 값들을 기반으로
        //  나머지 글자의 디코딩케이스를 계산하여 result 배열에 i 위치에 대입
    for (let i = strSize - 3; i >= 0; i--) {
        let tmp = 0;
        if (numSet.has(s[i])) tmp += result[i + 1];
        if (numSet.has(s[i] + s[i + 1])) tmp += result[i + 2];
        result[i] = tmp;
    }

    return result[0];
};

numDecodings('232425'); // 8
