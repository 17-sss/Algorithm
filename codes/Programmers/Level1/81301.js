// https://programmers.co.kr/learn/courses/30/lessons/81301
// 2021 카카오 채용연계형 인턴십 : 숫자 문자열과 영단어

// 1차시, 통과 성공
function solution(s) {
  const numNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const REG_EX = new RegExp(`${numNames.join('|')}`, 'g');
  const numMap = new Map(Array.from({ length: numNames.length }, (_, i) => [numNames[i], i]));
  return +s.replace(REG_EX, (name) => numMap.get(name));
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));

pipeLog(
  solution('one4seveneight'), // 1478
  solution('23four5six7'), // 234567
  solution('2three45sixseven'), // 234567
  solution('123'), // 123
);
