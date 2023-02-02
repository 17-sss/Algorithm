// https://school.programmers.co.kr/learn/courses/30/lessons/120888
// 중복된 문자 제거

// 1차시, 통과 성공
function solution(my_string) {
  let result = '';
  const strings = my_string.split('');
  strings.forEach((char) => {
    if (result.indexOf(char) > -1) {
      return;
    }
    result += char;
  });
  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('people'), // "peol"
  solution('We are the world'), // "We arthwold"
);
