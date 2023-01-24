// ME
function compareMap(map1, map2) {
  if ((!map1 || !map2) && map1.size !== map2.size) return false;
  for (const [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) return false;
  }
  return true;
}
function createMap(str) {
  const map = new Map();
  for (const char of str) map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  return map;
}
function solution(s, t) {
  const sMap = createMap(s.slice(0, t.length));
  const tMap = createMap(t);
  let left = 0;
  let right = t.length - 1;

  let cnt = 0;
  while (right < s.length) {
    if (compareMap(sMap, tMap)) cnt++;
    if (sMap.get(s[left]) <= 1) sMap.delete(s[left]);
    else sMap.set(s[left], sMap.get(s[left]) - 1);
    left++;
    right++;
    if (right >= s.length) break;
    if (sMap.has(s[right])) sMap.set(s[right], sMap.get(s[right]) + 1);
    else sMap.set(s[right], 1);
  }
  return cnt;
}

console.log(solution('bacaAacba', 'abc')); // 3

// ---------------------------

// ANSWER
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
