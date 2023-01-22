// ME
function solution(s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
  }
  const result = Array.from(map).sort(([_a, aValue], [_b, bValue]) => bValue - aValue)[0][0];
  return result;
}

console.log(solution('BACBACCACCBDEDE')); // "C"
