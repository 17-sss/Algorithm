// https://programmers.co.kr/learn/courses/30/lessons/12899
// 124의 나라

// (2022.01.01) ---------------------

// 3-1차시, 또 다른 풀이에 대한 메모 및 연구
/*
  - 풀이: https://cnwlcjf.tistory.com/64 (훨씬 쉬운 풀이)
    - 이 풀이처럼, 124나라엔 0이 없다는 걸 인지하고 계산해나아갔다면 결과 값이 나올 것.
*/
function solution(n) {
  let result = '';
  while (n) {
    let nRemainder = n % 3;
    n = Math.floor(n / 3);
    if (!nRemainder) {
      nRemainder = '4';
      n -= 1;
    };
    result = nRemainder + result;
  }
  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution(1), // "1"
  solution(2), // "2"
  solution(3), // "4"
  solution(4), // "11"
  solution(10), // "41"
  solution(15), // "114"
  solution(16), // "121"
);

// 참고: https://mungto.tistory.com/206
// 3차시, 통과 성공 (100 / 100 - 정확성 100, 효율성 100)
/* 
function solution(n) {
  let result = '';
  while(n) {
    const nRemainder = n % 3;
    let tmp;
    switch (nRemainder) {
      case 1: tmp = '1'; break;
      case 2: tmp = '2'; break;
      case 0: tmp = '4'; break;
      default: break;
    }
    result = tmp + result;
    if (!nRemainder) n = Math.floor(n / 3) - 1;
    else n = Math.floor(n / 3);
  }
  return result;
}
*/

// (2021.12.31) ---------------------

// 2차시, 통과 실패 (70 / 100 - 정확성 100, 효율성 0)
/* 
function solution(n) {
  const arrN = Array.from({ length: n + 1 }, () => '');
  arrN[0] = '';

  let tmpIdx = 0;
  for (let i = 1; i < arrN.length; i++) {
    const nRemainder = i % 3;
    let tmp;
    switch (nRemainder) {
      case 1: tmp = '1'; break;
      case 2: tmp = '2'; break;
      case 0: tmp = '4'; break;
      default: break;
    }
    arrN[i] = arrN[tmpIdx] + tmp;
    if (!nRemainder) tmpIdx++;
  }

  return arrN[n];
}
*/

// (2021.12.17) ---------------------
// 1차시, 보류
/* 
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
      result = '1' + result;
      // result = result.slice(0, result.length)
    }
    console.log(result);
    nLoop++;
  }

  return result;
}
*/
