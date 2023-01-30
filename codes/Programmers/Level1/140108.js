// https://school.programmers.co.kr/learn/courses/30/lessons/140108
// 문자열 나누기

// 2차시, 통과 성공
function solution(s) {
  let [result, currCount, anotherCount] = [0, 0, 0];
  let currChar;

  for (let i = 0; i < s.length; i++) {
    if (typeof currChar === 'undefined') {
      if (i === s.length - 1) {
        result++;
        break;
      }
      currChar = s[i];
      currCount++;
      continue;
    }

    if (currChar === s[i]) currCount++;
    else anotherCount++;

    if (currCount === anotherCount || (currCount !== anotherCount && i === s.length - 1)) {
      currChar = undefined;
      [currCount, anotherCount] = [0, 0];
      result++;
    }
  }

  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('aaba'), // 1
  solution('aaa'), // 1
  solution('banana'), // 3
  solution('abracadabra'), // 6
  solution('aaabbaccccabba'), // 3
);

// 1차시, 통과 실패
/* 
function solution(s) {
  function isSameAsStandard(standard, map) {
    if (typeof dataMap === 'undefined') {
      return false;
    }
    const standardValue = map.get(standard);
    let anotherValue = 0;
    for (const [_, value] of map) {
      anotherValue += value;
    }
    return anotherValue - standardValue === standardValue;
  }

  let result = 0;
  let standard, dataMap;
  for (let i = 0; i < s.length; i++) {
    if (typeof standard === 'undefined') {
      standard = s[i];
      dataMap = new Map([[standard, 1]]);
      if (i === s.length - 1) {
        result++;
      }
      continue;
    }
    if (typeof dataMap !== 'undefined') {
      dataMap.set(s[i], (dataMap.get(s[i]) || 0) + 1);
    }
    if (isSameAsStandard(standard, dataMap)) {
      standard = undefined;
      result++;
    }
  }

  return result;
}
*/
