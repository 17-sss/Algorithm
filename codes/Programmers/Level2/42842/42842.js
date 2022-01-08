// https://programmers.co.kr/learn/courses/30/lessons/42842
// 카펫

// (2022.01.01) ---------------------

// 2차시, 통과 성공 (공식 참고:https://mozzioi.tistory.com/95)
function solution(brown, yellow) {
  const size = brown + yellow;

  // 가로 (col), 세로 (row)
  for (let row = 1; row <= size; row++) {
    const col = Math.floor(size / row); 
    if (row > col) continue;
    const yellowCnt = (row - 2) * (col - 2);
    if (yellow === yellowCnt) return [col, row];
  }
  return [];
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution(10, 2), // [4, 3]
  solution(8, 1), // [3, 3]
  solution(24, 24), // [8, 6]
);

// 1차시, 통과 실패 (시간 초과)
/* 
function createAllCase(brown, yellow) {
  const size = brown + yellow;
  const set = new Set();
  for (let i = 3; i <= size; i++) {
    for (let j = i; j <= size; j++) {
      if (j === size) continue;
      if (j * i === size) set.add([j, i]);
    }
  }
  return [...set];
}

function solution(brown, yellow) {
  const allCase = createAllCase(brown, yellow);
  if (!allCase.length) return [];
  if (allCase.length === 1) return allCase[0];
  for (let i = 0; i < allCase.length; i++) {
    const [col, row] = allCase[i];
    let yellowCnt = yellow;
    Array.from({ length: row }, (_, i) => {
      if (!i || row - 1 === i) return Array.from({ length: col }, () => 'b');
      return Array.from({ length: col }, (_, i) => {
        let str;
        if (!i || col - 1 === i) str = 'b';
        if (!str) yellowCnt--;
        return str;
      });
    });
    if (!yellowCnt) return [col, row];
  }
  return [];
}
*/
