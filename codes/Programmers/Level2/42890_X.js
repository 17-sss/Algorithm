// https://programmers.co.kr/learn/courses/30/lessons/42890
// 2019 KAKAO BLIND RECRUITMENT : 후보키

// (2021.09.09) ---------------------
function solution(relation) {
  return;
}

console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ]),
); // 2

// 1차시, 뭐냐 이게..
/* 
function solution(relation) {
  const arrCombi = [];
  function combi(currStr, idx, arr) {
    if (arr.length <= idx) return arrCombi.push(currStr);
    combi(currStr + arr[idx], idx + 1, arr);
    combi(currStr + '', idx + 1, arr);
  }

  const candidatesIdx = [];
  for (let col = 0; col < relation[0].length; col++) {
    const arrDup = [];
    for (let row = 0; row < relation.length; row++) {
        const data = relation[row][col];
        if (arrDup.includes(data)) {
            candidatesIdx.push(col);
            break;
        }
        arrDup.push(data);
    }
  }
  console.log(candidatesIdx)

  return;

  for (let idx = 0; idx < relation.length; idx++) {
    const r = relation[idx];
    combi('', 0, r);
  }

  console.log(arrCombi);
}


*/
