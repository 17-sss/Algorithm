// ME
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function createMapState(str) {
  const map = new Map();
  for (const char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  const valueCount = Array.from(map.values()).reduce((result, curr) => result + curr);
  return { map, valueCount };
}

function solution(s, t) {
  let result = 0;
  const sMapState = createMapState(s.slice(0, t.length));
  const tMapState = createMapState(t);

  let rt = t.length - 1;
  for (let lt = 0; lt < s.length - (t.length - 1); lt++) {
    const leftChar = s[lt];
    const rightChar = s[rt];
    if (sMapState.valueCount !== tMapState.valueCount) {
      sMapState.map.set(rightChar, (sMapState.map.get(rightChar) ?? 0) + 1);
      sMapState.valueCount++;
    }
    if (compareMaps(sMapState.map, tMapState.map)) {
      result++;
    }
    sMapState.map.set(leftChar, (sMapState.map.get(leftChar) ?? 0) - 1);
    if (sMapState.map.get(leftChar) <= 0) {
      sMapState.map.delete(leftChar);
    }
    sMapState.valueCount--;
    rt++;
  }

  return result;
}

console.log(solution('bacaAacba', 'abc')); // 3
