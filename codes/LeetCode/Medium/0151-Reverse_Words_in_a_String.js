// https://leetcode.com/problems/reverse-words-in-a-string/
// 151. Reverse Words in a String

// 3차시, 통과 (2차시와 시간복잡도는 비슷한듯.)
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  const REG_EX = /(^\s*)|(\s*$)/g;
  s = s.replace(REG_EX, '') + ' ';

  let tmp = '';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    char !== ' ' && (tmp += s[i]);
    if (char === ' ' && tmp) {
      result = result ? `${tmp} ${result}` : tmp;
      tmp = '';
    }
  }
  return result;
};
console.log(reverseWords('  Bob    Loves  Alice   '));

// 2차시, 통과 (시간복잡도, 공간복잡도 개선)
/* 
const REG_EX = /(^\s*)|(\s*$)/g;
const reverseWords = (s) =>
  s
    .replace(REG_EX, '')
    .split(' ')
    .reduce((result, v) => (v && result.push(v.replace(REG_EX, '')), result), [])
    .reverse()
    .join(' ');
*/

// 1차시, 통과 (시간복잡도 똥망)
/*
const reverseWords = (s) =>
  s
    .replace(/(^\s*)|(\s*$)/, '')
    .split(' ')
    .reduce((result, v) => (result.push(v.replace(/(^\s*)|(\s*$)/, '')), result), [])
    .reverse()
    .join(' ');
*/
