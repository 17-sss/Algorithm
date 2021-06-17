// https://leetcode.com/problems/top-k-frequent-elements/
// 347. Top K Frequent Elements
/* 
    1) nums 배열에 있는 숫자들을 카운팅 (map 활용)
    2) 계산된 map에서 많이 쓰이는 순으로 
        매개변수 k에 해당하는 갯수만큼 num들로 이루어진 배열을 반환
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const map = new Map();
    const nMax = nums.length;

    let nIdx = 0;
    while (nIdx < nMax) {
        map.has(nums[nIdx])
            ? map.set(nums[nIdx], map.get(nums[nIdx]) + 1)
            : map.set(nums[nIdx], 1);
        nIdx++;
    }

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .map((item) => item[0])
        .slice(0, k);
};
topKFrequent([1, 1, 1, 2, 2, 3], 2); // [1,2]
