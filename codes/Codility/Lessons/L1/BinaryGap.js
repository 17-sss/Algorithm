// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
// Lesson 1 : BinaryGap
// 이진수 내에서 1과 1사이에 0이 제일 많은 구간의 count를 반환

// (2021.09.16) ---------------------

function solution(N) {
  const result = [];
  const strBinary = N.toString(2);
  let oneState = false;
  let countState = 0;

  for (let i = 0; i < strBinary.length; i++) {
    const char = strBinary[i];
    if (!oneState && char === '1') oneState = true;
    if (oneState) {
      if (char === '0') countState++;
      else if (char === '1') {
        result.push(countState);
        countState = 0;
      }
    }
  }

  return Math.max(...result);
}

console.log(solution(1041), solution(32), solution(529));
