// https://leetcode.com/problems/word-pattern/
// 290. Word Pattern
// - 매개변수 문자열 s가 문자열 pattern과 같은 패턴을 가지고있다면 true

// 1차시, 통과 성공
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = (pattern, s) => {
    const arrS = s.split(' ');
    if (arrS.length !== pattern.length) return false;

    const map = new Map();

    let nIdx = 0;
    while (nIdx < pattern.length) {
        const currPattern = pattern[nIdx];
        // 1) 이미 등록된 패턴(키)이 있을 경우
            // 현재 들어오는 배열 arrS (매개변수 s)의 현재 loopIndex(nIdx)에 위치한 아이템과
            // 등록된 패턴의 value 값을 비교하여 다르다면 false 반환
        if (map.has(currPattern)) {
            if (map.get(currPattern) !== arrS[nIdx]) return false;
        } else {
            // 2-1) 현재 set되려는 key, value가 이미 map에 들어간 key에서 같은 Value를 쓰고 있는지 체크
            // 이미 쓰고있다면 false 반환
            const isDifferKeySameValue =
                [...map.entries()].findIndex(
                    ([key, value]) =>
                        key !== currPattern && value === arrS[nIdx],
                ) > -1;

            if (isDifferKeySameValue) return false;

            // 2-2) 2-1과 부합하지 않다면 패턴(키)와 배열 arrS의 nIdx에 위치한 아이템(값)을 등록
            map.set(currPattern, arrS[nIdx]);
        }

        nIdx++;
    }

    return true;
};

// wordPattern("abba", "dog cat cat dog"); // true
wordPattern('abba', 'dog dog dog dog'); // false
