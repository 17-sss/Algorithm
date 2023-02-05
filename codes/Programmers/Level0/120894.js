// https://school.programmers.co.kr/learn/courses/30/lessons/120894
// 영어가 싫어요

// 1차시, 통과 성공
function solution(numbers) {
  const numberInfo = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let result = '';
  let currentKey = '';
  for (let i = 0; i < numbers.length; i++) {
    currentKey += numbers[i];
    if (numberInfo.hasOwnProperty(currentKey)) {
      result += `${numberInfo[currentKey]}`;
      currentKey = '';
    }
  }
  return +result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('onetwothreefourfivesixseveneightnine'), // 123456789
  solution('onefourzerosixseven'), // 14067
);
