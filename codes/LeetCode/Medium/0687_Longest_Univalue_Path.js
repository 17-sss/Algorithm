// https://leetcode.com/problems/longest-univalue-path/
// Longest Univalue Path: 가장 긴 동일 값의 경로를 계산하는 문제

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// (2021.05.12)
// 1차시, 통과 실패 (참고했는데도)
const calcLength = (node, currCnt) => {
    if (!node) return 0;
    let leftCnt = 0,
        rightCnt = 0;

    const tmpLeftCnt = calcLength(node.left, currCnt);
    const tmpRightCnt = calcLength(node.right, currCnt);

    if (node.left && node.val === node.left.val) leftCnt = tmpLeftCnt + 1;
    if (node.right && node.val === node.right.val) rightCnt = tmpRightCnt + 1;

    currCnt = Math.max.apply(null, [currCnt, leftCnt + rightCnt]);
    return Math.max(leftCnt, rightCnt);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestUnivaluePath = (root) => {
    if (!root) return 0;
    return calcLength(root, 0);
};