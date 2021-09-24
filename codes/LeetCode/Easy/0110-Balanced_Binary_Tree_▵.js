// https://leetcode.com/problems/balanced-binary-tree/
/* 
  1. 균형 이진트리..?(https://ko.wikipedia.org/wiki/%EC%9D%B4%EC%A7%84_%ED%8A%B8%EB%A6%AC)
    균형 이진 트리는 잎 노드에 대해 가능한 한 최대의 최소 높이(다른 말로 깊이)를 갖는데, 
    주어진 수의 잎 노드에 대해, 잎 노드가 가능한 가장 큰 높이에 위치하기 때문이다.
  2. 생각.
    - 이해하기론 왼쪽의 마지막 노드의 깊이와 오른쪽의 마지막 노드 깊이를 비교했을 때 
      1 이상 차이나면 균형 트리가 아닌 듯! (후위순회로 돌아야 함)
*/

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

//  2차시, 참고함
const isBalanced = (root) => {
  function DFS(node, depth) {
    if (!node) return depth;
    const LDepth = DFS(node.left, depth + 1);
    const RDepth = DFS(node.right, depth + 1);

    if (LDepth === -1 || RDepth === -1) return -1;
    if (Math.abs(LDepth - RDepth) > 1) return -1;
    return Math.max(LDepth, RDepth);
  }
  return DFS(root, 0) > -1;
};

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(3, new TreeNode(4), new TreeNode(4)), new TreeNode(3)),
  new TreeNode(2),
  //[1,2,2,3,3,null,null,4,4];
);
console.log(isBalanced(root)); // false

// 2차시, 참고용
/* 
const isBalanced = (root) => {
  const searchDepth = (node, depth) => {
    if (node === null) return depth;
    depth++;

    const leftDepth = searchDepth(node.left, depth);
    const rightDepth = searchDepth(node.right, depth);

    if (leftDepth === -1 || rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;

    const max = Math.max(leftDepth, rightDepth);
    return max;
  };

  if (root === null) return true;
  return searchDepth(root, 0) !==  -1;
};
*/

// 1차시, 오답
/* 
const isBalanced = (root) => {
  if (!root || !root.val || (!root.left && !root.right)) return true;
  const arrTmp = [];
  function DFS(node, cnt) {
    if (!node) return arrTmp.push(cnt);
    DFS(node.left, cnt + 1);
    DFS(node.right, cnt + 1);
  }
  DFS(root, 0);
  console.log(arrTmp);
  const result = Math.max(...arrTmp) - Math.min(...arrTmp);
  return result === 1;
};
 */
