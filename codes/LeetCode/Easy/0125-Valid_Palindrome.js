// https://leetcode.com/problems/valid-palindrome/
// 125. Valid Palindrome

// 1차시, 통과 성공
/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
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
        if (strLeft === strRight) {
            left++;
            right--;
        } else return false;
    }
    return true;
};

// isPalindrome('"A man, a plan, a canal: Panama"');
// isPalindrome('"ab_a"');
isPalindrome('Marge, let\'s "[went]." I await {news} telegram.');
