// https://programmers.co.kr/learn/courses/30/lessons/12911
// 다음 큰 숫자

// (2021.12.12) ---------------------
// 1차시, 통과 성공
const getOneCount = (num) =>
  num
    .toString(2)
    .split('')
    .reduce((result, curr) => (curr === '1' && result++, result), 0);

const solution = (n) => {
  const nOneCnt = getOneCount(n);
  let currNum = n;
  while (true) {
    currNum++;
    const currOneCnt = getOneCount(currNum);
    if (currOneCnt === nOneCnt) return currNum;
    if (currNum === Number.MAX_SAFE_INTEGER) return -1;
  }
};

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution(78), // 83
  solution(15), // 23
);
