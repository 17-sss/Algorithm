// ME
function solution(s, t) {
  const map = new Map();
  for (let idx = 0; idx < s.length; idx++) {
    const char = s[idx];
    if (t !== char) continue;

    if (map.has(char)) map.set(char, map.get(char).add(idx));
    else map.set(char, new Set().add(idx));
  }

  const result = [];
  const tIdxs = [...map.get(t).values()];

  for (let idx = 0; idx < s.length; idx++) {
    const currAbsIdxs = tIdxs.reduce((result, tIdx) => (result.push(Math.abs(tIdx - idx)), result), []);
    result.push(Math.min(...currAbsIdxs));
  }

  return result.join(' ');
}

let str = 'teachermode';
console.log(solution(str, 'e') === '1 0 1 2 1 0 1 2 2 1 0');

// ANSWER
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));
