// ME
function solution(str1, str2) {
  function createStrMap(str) {
    const map = new Map();
    for (const char of str) map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
    return map;
  }
  const map1 = createStrMap(str1);
  const map2 = createStrMap(str2);
  for (const [key, value] of map1) {
    const isSame = map2.has(key) && map2.get(key) === value;
    if (isSame) map2.delete(key);
  }
  return map2.size ? 'NO' : 'YES';
}

console.log(solution('AbaAeCe', 'baeeACA')); // 'YES'
console.log(solution('abaCC', 'Caaab')); // 'NO'

// ---------------------------

// ANSWER
function solution(str1, str2) {
  let answer = 'YES';
  let sH = new Map();
  for (let x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let x of str2) {
    if (!sH.has(x) || sH.get(x) == 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }
  return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));
