// https://leetcode.com/problems/valid-palindrome-ii/
// 680. Valid Palindrome II

// 2차시, 통과 성공. 아직도 이런 구조는 햇갈려..
/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = (s) => {
    if (!s) return true;

    // 알파벳, 숫자 제외하고 모두 제거
    s = s
        .replace(
            /[^a-zA-z\d]|[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"\_]/g,
            '',
        )
        .toLowerCase();

    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const strLeft = s[left];
        const strRight = s[right];

        if (strLeft !== strRight)
            return (
                oneMoreCheck(s, left + 1, right) ||
                oneMoreCheck(s, left, right - 1)
            );
        left++;
        right--;
    }
    return true;
};

const oneMoreCheck = (s, left, right) => {
    while (left < right) {
        const strLeft = s[left];
        const strRight = s[right];

        if (strLeft !== strRight)
            return false;
        left++;
        right--;
    }
    return true;
};

// 1차시, 통과 실패

/*
const validPalindrome = (s) => {
    if (!s) return true;
    // 알파벳, 숫자 제외하고 모두 제거
    s = s
        .replace(
            /[^a-zA-z\d]|[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"\_]/g,
            '',
        )
        .toLowerCase();

    let left = 0;
    let right = s.length - 1;
    let bOneCheck = false;

    while (left < right) {
        const strLeft = s[left];
        const strRight = s[right];

        if (!bOneCheck && strLeft !== strRight) {
            const strLeftTmp = s[left+1];
            const strRightTmp = s[right-1];
            if (strLeftTmp === strRight) left++;    // 여기서 더 조건이 필요한데..
            else if (strLeft === strRightTmp) right--;// 여기서 더 조건이 필요한데..
            bOneCheck = true;
            continue;
        }

        if (strLeft === strRight) {
            left++;
            right--;
        } else return false;
    }
    return true;
};

// validPalindrome('abca'); // true (c를 제거했을 때 거꾸로해도 같은 문자가 됨)
validPalindrome('"aguokepatgbnvfqmgm l c up uufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupu c ul mgmqfvnbgtapekouga"')
*/
