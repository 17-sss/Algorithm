// https://programmers.co.kr/learn/courses/30/lessons/77486
// 2021 Dev-Matching: 웹 백엔드 개발자(상반기) : 다단계 칫솔 판매

// (2021.09.17) ---------------------

// 1차시, 실패 (수식이 잘못됨.)
class Node {
  constructor(name) {
    this.name = name;
    this.parent = null;
    this.children = [];
    this.amount = 0;
  }
}

const findNode = (aArray, aName) => aArray.find(({ name }) => name === aName);
const createNodeInfo = (enroll, referral) => {
  // 부모(key), 자식(value)간의 정보들을 매칭 (enroll, referral 활용)
  const childrenMap = new Map();
  referral.forEach((ref, idx) => {
    const enr = enroll[idx];
    if (childrenMap.has(ref)) childrenMap.set(ref, childrenMap.get(ref).add(enr));
    else childrenMap.set(ref, new Set().add(enr));
  });

  const center = new Node('center'); // 최상단 부모 center
  const nodeInfo = [center]; // 모든 node 정보들이 들어있는 list

  // 각 Node를 만들때 부모, 자식 정보들도 넣어준 후, nodeInfo에 push
  for (const [key, valueSet] of childrenMap) {
    [...valueSet].forEach((vName) => {
      const currNode = findNode(nodeInfo, vName) ? findNode(nodeInfo, vName) : new Node(vName);
      currNode.parent = findNode(nodeInfo, key === '-' ? 'center' : key);
      if (!currNode.parent) return nodeInfo.push(currNode);

      findNode(currNode.parent.children, currNode.name) || currNode.parent.children.push(currNode);
      nodeInfo.push(currNode);
    });
  }

  return nodeInfo;
};

function solution(enroll, referral, seller, amount) {
  const nodeInfo = createNodeInfo(enroll, referral);
  const sellerMap = new Map(seller.map((v, idx) => [v, amount[idx]]));

  for (const [name, value] of sellerMap) {
    let currNode = findNode(nodeInfo, name);

    if (!currNode) continue;
    currNode.amount += value * 100;

    if (!currNode.parent) continue;
    let parentNode = currNode.parent;
    while (parentNode) {
      // console.log(nodeInfo.map(({name, amount}) => [name, amount]))
      parentNode.amount += Math.floor(currNode.amount / 10);

      if (name === currNode.name) currNode.amount -= (Math.floor((value * 100) / 10));
      else currNode.amount -= Math.floor(currNode.amount / 10);

      currNode = parentNode;
      parentNode = parentNode.parent;
    }
  }

  return nodeInfo.map(({ name, amount }) => [name, amount]);
}

console.log(
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['young', 'john', 'tod', 'emily', 'mary'],
    [12, 4, 2, 5, 10], // [360, 958, 108, 0, 450, 18, 180, 1080]
  ),
  solution(
    ['john', 'mary', 'edward', 'sam', 'emily', 'jaimie', 'tod', 'young'],
    ['-', '-', 'mary', 'edward', 'mary', 'mary', 'jaimie', 'edward'],
    ['sam', 'emily', 'jaimie', 'edward'],
    [2, 3, 5, 4], // [0, 110, 378, 180, 270, 450, 0, 0]
  ),
);
