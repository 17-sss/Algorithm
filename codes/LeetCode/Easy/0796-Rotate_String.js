// https://leetcode.com/problems/rotate-string/
// 796. Rotate String

// 1차시, 통과 성공
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const moveLeft = (str) => str.slice(1, str.length) + str[0];

const rotateString = (s, goal) => {
    if (s.length <= 1) return s === goal;
    // moveLeft 라는 함수 필요
    let startStr = moveLeft(s); // abcde

    // startStr은 계속 돌아가야하니까!
    // abcde |  bcdea, cdeab, deabc, eabcd,      abcde

    while (startStr !== s) {
        // goal === startStr => return true
        if (startStr === goal) return true;
        startStr = moveLeft(startStr);
    }

    return false;
};

rotateString('abcde', 'cdeab');