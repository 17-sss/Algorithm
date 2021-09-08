// https://programmers.co.kr/learn/courses/30/lessons/60057
// 문자열 압축 : 2020 KAKAO BLIND RECRUITMENT

// 2차시, 통과 성공 (너무 많은 테스트케이스 ㅠ)
function solution(s) {
  if (s.length <= 1) return s.length;

  let nUnit = 1;

  const arrUnitLengths = [];
  while (s.length > nUnit) {
    const arrTmp = [];

    let nStart = 0;
    let nEnd = nUnit;

    while (true) {
      if (nStart > s.length) break;
      const currStr = s.slice(nStart, nEnd);
      const lastOriginStr = arrTmp.length > 0 && arrTmp[arrTmp.length - 1];

      if (!lastOriginStr) arrTmp.push(currStr);
      else {
        const lastNum =
          lastOriginStr.match(/\d+/g) && lastOriginStr.match(/\d+/g).length > 0 ? +lastOriginStr.match(/\d+/g)[0] : 1;
        const lastStr = lastOriginStr.replace(/\d+/g, '');

        if (currStr === lastStr)
          Number.isNaN(lastNum)
            ? (arrTmp[arrTmp.length - 1] = `2${currStr}`)
            : (arrTmp[arrTmp.length - 1] = `${lastNum + 1}${currStr}`);
        else arrTmp.push(currStr);
      }

      nStart = nEnd;
      nEnd += nUnit;
    }
    nUnit++;

    arrUnitLengths.push(arrTmp.join('').length);
    if (s.split('').every((c) => c === s.split('')[0])) break;
  }

  return Math.min(...arrUnitLengths);
}

console.log(solution('a')); // 1
console.log(solution('aabbaccc')); // 7
console.log(solution('ababcdcdababcdcd')); // 9
console.log(solution('abcabcdede')); // 8
console.log(solution('abcabcabcabcdededededede')); // 14
console.log(solution('xababcdcdababcdcd')); // 17
console.log(solution('aaaaaaaaaab')); // 4

console.log(solution('acacacbacacac')); // 9 (3acba2cac)
console.log(solution('acacacacacacbacacacacacac')); // 9 (6acba5cac)

const a100 = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
console.log(solution(a100)); // 4  (100a)

// 1차시, 통과 실패
/* 
function solution(s) {
  let nUnit = 1;

  const arrUnitLengths = [];
  while (s.length >= nUnit) {
    const arrTmp = [];

    let nStart = 0;
    let nEnd = nUnit;

    while (true) {
      if (nStart >= s.length) break;
      const currStr = s.slice(nStart, nEnd);
      const lastOriginStr = arrTmp.length > 0 && arrTmp[arrTmp.length - 1];

      if (!lastOriginStr) arrTmp.push(currStr);
      else {
        const lastNum = lastOriginStr.length > 0 && +lastOriginStr[0];
        const lastStr = lastOriginStr.replace(/\d+/g, '');

        if (currStr === lastStr)
          Number.isNaN(lastNum)
            ? (arrTmp[arrTmp.length - 1] = `2${currStr}`)
            : (arrTmp[arrTmp.length - 1] = `${lastNum + 1}${currStr}`);
        else arrTmp.push(currStr);
      }

      nStart = nEnd;
      nEnd += nUnit;
    }
    nUnit++;

    arrUnitLengths.push(arrTmp.join('').length);
  }

  return Math.min(...arrUnitLengths);
}
*/
