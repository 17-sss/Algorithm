// https://school.programmers.co.kr/learn/courses/30/lessons/120893
// 대문자와 소문자

// 1차시, 통과 성공
function solution(my_string) {
  let result = '';
  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];
    if ('a'.charCodeAt() <= char.charCodeAt() && 'z'.charCodeAt() >= char.charCodeAt()) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('cccCCC'), // "CCCccc"
  solution('abCdEfghIJ'), // "ABcDeFGHij"
);
