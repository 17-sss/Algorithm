// https://school.programmers.co.kr/learn/courses/30/lessons/155652
// 둘만의 암호

function solution(s, skip, index) {
  const charValues = s.split('').map((v) => v.charCodeAt());
  const skipChars = skip.split('');

  let result = '';
  for (let i = 0; i < charValues.length; i++) {
    let loopCnt = 0;
    let currCharCode = charValues[i];
    while (index > loopCnt) {
      currCharCode++;
      if ('z'.charCodeAt() < currCharCode) {
        currCharCode = 'a'.charCodeAt();
      }
      if (skipChars.includes(String.fromCharCode(currCharCode))) {
        continue;
      }
      loopCnt++;
    }
    result += String.fromCharCode(currCharCode);
  }
  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('aukks', 'wbqd', 5), // 	"happy"
);
