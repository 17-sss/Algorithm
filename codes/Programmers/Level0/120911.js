// https://school.programmers.co.kr/learn/courses/30/lessons/120911
// 문자열 정렬하기 (2)

// 1차시,
function solution(my_string) {
  const alphaMap = new Map(
    Array.from({ length: 'z'.charCodeAt() - 'a'.charCodeAt() + 1 }, (_, i) => [
      String.fromCharCode('a'.charCodeAt() + i),
      'a'.charCodeAt() + i,
    ]),
  );

  const textInfo = [];
  const lowerText = my_string.toLowerCase();
  for (let i = 0; i < lowerText.length; i++) {
    const char = lowerText[i];
    textInfo.push([char, alphaMap.get(char)]);
  }

  const result = textInfo
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[0])
    .join('');

  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('Bcad'), //	"abcd"
  solution('heLLo'), // "ehllo"
  solution('Python'), // "hnopty"
);
