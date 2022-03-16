// https://programmers.co.kr/learn/courses/30/lessons/86051
// 월간 코드 챌린지 시즌3 : 없는 숫자 더하기

// 1차시, 통과 성공
function solution(numbers) {
  const numSet = new Set(numbers);

  let nIdx = 0;
  let result = 0;
  while (nIdx <= 9) {
    if (!numSet.has(nIdx)) result += nIdx;
    nIdx++;
  }
  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution([1, 2, 3, 4, 6, 7, 8, 0]), // 14
  solution([5, 8, 4, 0, 6, 7, 9]), // 6
);
