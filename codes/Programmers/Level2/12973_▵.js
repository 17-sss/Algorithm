// https://programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기
// -- Stack을 활용한 문제임.

// (2021.12.27) ---------------------

// 2차시, 참고 (https://velog.io/@diddnjs02/코딩테스트프로그래머스-짝지어-제거하기)
function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!stack.length || stack[stack.length - 1] !== char) stack.push(char)
    else if (stack[stack.length - 1] === char) stack.pop();
  }
  return stack.length ? 0 : 1;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('baabaa'), // 1
  solution('cdcd'), // 0
);

// 1차시, 다시 만들기로..
/* 
const isNumber = (value) => typeof value === 'number';
function solution(s) {
  let nPos = 0;
  while (s) {
    let start = (end = null);
    for (let i = nPos; i < s.length; i++) {
      if (!isNumber(start)) start = i;
      else if (s[start] === s[i]) {
        end = i;
        break;
      }
    }
    if ([start, end].some((v) => !isNumber(v))) {
      nPos++;
      continue;
    } else {
      const target = s.slice(start, end + 1);
      s = s.replace(new RegExp(`${target}`, 'g'), '');
    }
  }
  return s ? 0 : 1;
}
*/
