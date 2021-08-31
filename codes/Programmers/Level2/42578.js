// https://programmers.co.kr/learn/courses/30/lessons/42578
// 위장

// 2차시, 시도 중...
function solution(clothes) {}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
); // 5
console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ]),
); // 3

// 1차시, 통과 실패
/* 
function solution(clothes) {
  if (!clothes || clothes.length <= 0) return 0;
  let answer = 0;
  const map = new Map();

  clothes.forEach(([name, type]) => {
    if (map.has(type)) {
      const v = map.get(type);
      v.push(name);
      map.set(type, v);
    } else map.set(type, [name]);
  });
  if (map.size === 1) return clothes.length;

  const tmpSet = new Set();
  const arrValues = [...map.values()];

  function DFS(L, strTmp) {
    (strTmp && !tmpSet.has(strTmp)) && (tmpSet.add(strTmp), answer++);
    if (L === arrValues.length) return;
    for (let i = 0; i < arrValues[L].length; i++) 
        DFS(L + 1, strTmp + arrValues[L][i]);
  }
  for (let i = 0; i < arrValues.length; i++) DFS(i, '');

  return answer;
}
*/
