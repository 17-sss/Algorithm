// https://school.programmers.co.kr/learn/courses/30/lessons/154539
// 뒤에 있는 큰 수 찾기

// 3차시, 통과 실패 (거의 다 통과하지만, 20~24 테스트 케이스 시간 초과 걸림..)
function solution(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        result.push(numbers[j]);
        break;
      }
      if (numbers.length - 1 === j) {
        result.push(-1);
      }
    }
    if (numbers.length - 1 === i) {
      result.push(-1);
    }
  }
  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution([2, 3, 3, 5]), // [3, 5, 5, -1]
  solution([9, 1, 5, 3, 6, 2]), // [-1, 5, 6, 6, -1, -1]
);

// 2차시, 통과 실패
// - 효율성 꽝인듯
/* 
function solution(numbers) {
  const dupDelNums = Array.from(new Set(numbers));
  const map = new Map(dupDelNums.map((v) => [v, -1]));

  for (let i = 0; i < dupDelNums.length; i++) {
    const currNum = dupDelNums[i];
    const restBigNums = dupDelNums.slice(i + 1, dupDelNums.length).filter((v) => currNum < v);
    if (restBigNums.length === 0) {
      continue;
    }
    map.set(currNum, restBigNums[0]);
  }
  return numbers.map((v) => map.get(v));
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution([2, 3, 3, 5]), // [3, 5, 5, -1]
  solution([9, 1, 5, 3, 6, 2]), // [-1, 5, 6, 6, -1, -1]
);
*/

// 1차시, 통과 실패
// - numbers를 투포인터로 순회하며 현재 값이랑 가까운 제일 큰 수를 찾아버렸던..
/* 
function solution(numbers) {
  const updateMapForNumbersIdx = (map, currKey, idx) => {
    const value = map.get(currKey);
    if (value === -1) {
      map.set(currKey, numbers[idx]);
    } else {
      map.set(currKey, Math.abs(currKey - value) > Math.abs(currKey - numbers[idx]) ? numbers[idx] : value);
    }
  };
  const map = new Map(numbers.map((v) => [v, -1]));

  for (const [key] of map) {
    let rt = numbers.length - 1;
    for (let lt = 0; lt < Math.ceil(numbers.length / 2); lt++) {
      if (key < numbers[lt]) {
        updateMapForNumbersIdx(map, key, lt);
      }
      if (lt === rt) {
        break;
      }
      if (key < numbers[rt]) {
        updateMapForNumbersIdx(map, key, rt);
      }
      rt--;
    }
  }

  return numbers.map((num) => map.get(num));
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution([2, 3, 3, 5]), // [3, 5, 5, -1]
  solution([9, 1, 5, 3, 6, 2]), // [-1, 5, 6, 6, -1, -1]
);
*/
