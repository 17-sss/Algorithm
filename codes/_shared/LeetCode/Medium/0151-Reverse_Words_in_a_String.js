// https://leetcode.com/problems/reverse-words-in-a-string/
// 151. Reverse Words in a String

// 풀이 1
const REG_EX = /(^\s*)|(\s*$)/g;
const reverseWords = (s) =>
  s
    .replace(REG_EX, '')
    .split(' ')
    .reduce((result, v) => (v && result.push(v.replace(REG_EX, '')), result), [])
    .reverse()
    .join(' ');

// 풀이 2
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
