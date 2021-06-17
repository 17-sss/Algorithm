// https://leetcode.com/problems/top-k-frequent-words/
// 692. Top K Frequent Words

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
    words.sort(); // 먼저 배열 words를 정렬
    const map = new Map();
    const nMax = words.length;

    let nIdx = 0;
    while (nIdx < nMax) {
        const word = words[nIdx];
        if (map.has(word)) map.set(word, map.get(word) + 1);
        else map.set(word, 1);
        nIdx++;
    }

    const arrMap = [...map.entries()]   // 위에서 만든 Map을 Array로 변환
        .sort((a, b) => b[1] - a[1])    // value값을 기준으로 내림차순 정렬
        .map(([key, _]) => key);        // key(word)만으로 이루어진 배열 생성

    // 매개변수 k만큼 반환
    return arrMap.slice(0, k);
};
topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3); // ["i","love","coding"]
