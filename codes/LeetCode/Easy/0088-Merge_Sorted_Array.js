// https://leetcode.com/problems/merge-sorted-array/
// 88. Merge Sorted Array

// 2차시, 통과 성공 (강의 참고)
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    let idx1 = m - 1;
    let idx2 = n - 1;
    let wIdx = nums1.length - 1;
    if (idx2 < 0) return;

    while (idx1 >= 0 && idx2 >= 0) {
        if (nums1[idx1] >= nums2[idx2]) {
            nums1[wIdx] = nums1[idx1];
            idx1--;
            wIdx--;
        } else {
            nums1[wIdx] = nums2[idx2];
            idx2--;
            wIdx--;
        }
    }

    while (idx2 > -1) {
        nums1[wIdx] = nums2[idx2];
        wIdx--;
        idx2--;
    }
};

// 1차시, 통과 실패 (num1 배열만 수정해야 함)
/*
const merge = (nums1, m, nums2, n) => {
    const tmpNums1 = nums1.filter((v) => v);
    return [...tmpNums1, ...nums2].sort((a, b) => a - b);
};
*/
