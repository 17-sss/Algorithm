// https://programmers.co.kr/learn/courses/30/lessons/42892
// 2019 KAKAO BLIND RECRUITMENT : 길 찾기 게임

// 1차시, 통과 성공 [참고: https://after-newmoon.tistory.com/100] / 이해 필요
class Node {
  constructor({ id, x, y }) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  rootNode = null;
  insert(nodeObj) {
    if (!this.rootNode) this.rootNode = new Node(nodeObj);
    else this.subInsert(this.rootNode, nodeObj);
  }
  subInsert(node, nodeObj) {
    const pos = nodeObj.x > node.x ? 'right' : 'left';
    if (!node[pos]) node[pos] = new Node(nodeObj);
    else this.subInsert(node[pos], nodeObj);
  }
  // 전위
  preOrder(arrResult, node) {
    arrResult.push(node.id);
    if (node.left) this.preOrder(arrResult, node.left);
    if (node.right) this.preOrder(arrResult, node.right);
  }
  // 후위
  postOrder(arrResult, node) {
    if (node.left) this.postOrder(arrResult, node.left);
    if (node.right) this.postOrder(arrResult, node.right);
    arrResult.push(node.id);
  }
}

function solution(nodeinfo) {
  const bTree = new BinaryTree();
  nodeinfo = nodeinfo.map(([x, y], idx) => ({ id: idx + 1, x, y })).sort((v1, v2) => v2.y - v1.y);
  nodeinfo.forEach(({id, x, y}) => bTree.insert({id, x, y}));

  const preOrder = [];
  const postOrder = [];
  bTree.preOrder(preOrder, bTree.rootNode);
  bTree.postOrder(postOrder, bTree.rootNode);

  return [preOrder, postOrder]
}

// ---------------
const ninfo = [
  [5, 3],
  [11, 5],
  [13, 3],
  [3, 5],
  [6, 1],
  [1, 3],
  [8, 6],
  [7, 2],
  [2, 2],
];
console.log(solution(ninfo)); // [[7, 4, 6, 9, 1, 8, 5, 2, 3], [9, 6, 5, 8, 1, 4, 3, 2, 7]]
