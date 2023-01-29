// https://school.programmers.co.kr/learn/courses/30/lessons/147355
// 크기가 작은 부분 문자열
function solution(t, p) {
  const subTexts = [];
  for (let i = 0; i < t.length; i++) {
    const end = i + p.length;
    if (end >= t.length + 1) {
      break;
    }
    const subText = t.slice(i, end);
    subTexts.push(+subText);
  }

  return subTexts.reduce((result, curr) => {
    if (curr <= +p) {
      result++;
    }
    return result;
  }, 0);
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('3141592', '271'), //	2
  solution('500220839878', '7'), // 8
  solution('10203', '15'), // 3
);
