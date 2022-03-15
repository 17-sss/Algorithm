// https://programmers.co.kr/learn/courses/30/lessons/87389
// 월간 코드 챌린지 시즌3 : 나머지가 1이 되는 수 찾기

// 1차시, 통과 성공
function solution(n) {
  const MAX_LOOP = 1000000;
  for (let i = 2; i <= MAX_LOOP; i++) {
    if (n % i === 1) return i;
  }
  return -1;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution(10), // 3
  solution(12), // 11
);
