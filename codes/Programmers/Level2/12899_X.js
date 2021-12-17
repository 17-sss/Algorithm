// https://programmers.co.kr/learn/courses/30/lessons/12899
// 124의 나라

// (2021.12.17) ---------------------
// 1차시, 실패.. 보류

function solution(n) {
  if (!n) return '0';
  let result = '0';
  const ALLOW_NUMS = [1, 2, 4];
  const MAX_ALLOW_NUM = Math.max(...ALLOW_NUMS);
  let nLoop = 0;

  while (nLoop <= n) {
    if (!nLoop) {
      nLoop++;
      continue;
    }
    const currAllow = ALLOW_NUMS[(nLoop - 1) % ALLOW_NUMS.length];
    if (+result[0] < currAllow) result = result.replace(/^[0-9]/g, currAllow);
    if (+result[0] === MAX_ALLOW_NUM) {
        result = "1" + result;
        // result = result.slice(0, result.length)
    }
    console.log(result);
    nLoop++;
  }

  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
//   solution(1), // "1"
//   solution(2), // "2"
//   solution(3), // "4"
  solution(4), // "11"
);
