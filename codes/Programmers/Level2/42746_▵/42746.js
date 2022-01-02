// https://programmers.co.kr/learn/courses/30/lessons/42746
// 가장 큰 수

// (2022.01.02) ---------------------

// 3차시 (참고: https://velog.io/@fastpace04/프로그래머스JavaScript-가장-큰-수)
const solution = (numbers) => {
  const result = numbers
    .map((v) => '' + v)
    .sort((a, b) => b + a - (a + b))
    .join('');
  return result[0] === '0' ? '0' : result;
};

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution([6, 10, 2]), // "6210"
  solution([3, 30, 34, 5, 9]), // "9534330"
);

// 2차시, 실험용. (DFS로 모든 경우의 수를 만든 후 최대 값 출력)
/* 
function solution(numbers) {
  const set = new Set();
  function DFS(idx, arrCurrent = []) {
    if (numbers.length === idx) {
      const value = arrCurrent.reduce((result, v) => result + numbers[v], '');
      return set.add(+value);
    }
    for (let i = 0; i < numbers.length; i++) {
      if (arrCurrent.includes(i)) continue;
      DFS(idx + 1, [...arrCurrent, i]);
    }
  }
  DFS(0);

  const result = `${Math.max(...[...set])}`;
  return result;
}
*/

// (2021.07.06 이전) ---------------------
// 1차시, 통과 실패
/*
class Num {
    constructor(num, idx) {
        this.num = num;
        this.idx = idx;
        this.tempNum = null;
    }
}

function createTempNum(number) {
    let result = '';
    while (result.length < 5) result += number;
    if (result.length > 5) result = result.substring(0, 5);
    return result;
}

function solution(numbers) {
    const arrResult = numbers.map((v, i) => new Num(v, i));

    for (let i = 0; i < numbers.length; i++) {
        const curr = arrResult.find((v) => v.num === numbers[i]);
        curr.tempNum = createTempNum(numbers[i]);
    }
    arrResult.sort((a, b) => Number(b.tempNum) - Number(a.tempNum));

    const result = arrResult.reduce(
        (initValue, curr) => (initValue += curr.num),
        '',
    );

    return result;
}
*/
