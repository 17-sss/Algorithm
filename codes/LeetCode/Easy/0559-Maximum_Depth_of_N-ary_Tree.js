// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// Maximum Depth of N-ary Tree, 이 Tree에서 제일 긴 Depth를 찾는 문제!

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = (root) => {
    if (!root) return 0;

    const result = [];
    const dfs = (node, nResult) => {
        if (node.val !== null) nResult++;
        if (node.children.length > 0)
            node.children.forEach((currNode) => dfs(currNode, nResult));

        result.push(nResult);
    };

    dfs(root, 0);

    return Math.max(...result);
};
