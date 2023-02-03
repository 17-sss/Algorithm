// https://school.programmers.co.kr/learn/courses/30/lessons/120880
// 특이한 정렬

// 1차시, 통과 성공
function solution(numlist, n) {
  const map = new Map(numlist.map((v) => [v, Math.abs(v - n)]));
  return Array.from(map)
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return b[0] - a[0];
      }
      return a[1] - b[1];
    })
    .map((v) => v[0]);
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution([1, 2, 3, 4, 5, 6], 4), // [4, 5, 3, 6, 2, 1]
  solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30), // [36, 40, 20, 47, 10, 6, 7000, 10000]
);
