// ME (2차시)
function solution(test) {
  const infoMap = new Map();

  // 전체 테스트
  test.forEach((arrTest) => {
    // 현재 테스트
    for (let i = 0; i < arrTest.length; i++) {
      const v1 = arrTest[i];

      // 현재 테스트 순회
      for (let j = 0; j < arrTest.length; j++) {
        const v2 = arrTest[j];
        if (v1 === v2) continue;
        const key = `${v1}${v2}`;
        if (i > j) {
          if (infoMap.has(key)) infoMap.set(key, infoMap.get(key) + 1);
          else infoMap.set(key, 1);
        }
      }
    }
  });

  return [...infoMap.entries()].filter((v) => v[1] === test.length).length;
}
const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

// ME (1차시 / 실패)
/*
function solution(test) {
  const infoMap = new Map();

  test.forEach((arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const key = arr[i];
        const value = arr[j];

        if (infoMap.has(key)) {
          const values = infoMap.get(key);
          const chkValues = infoMap.get(value) ?? null;
          if (chkValues && chkValues.has(key)) {
            chkValues.delete(key);
            infoMap.set(value, chkValues);

            values.delete(value);
            infoMap.set(key, values);
          } else infoMap.set(key, values.add(value));
        } else infoMap.set(key, new Set().add(value));
      }
    }
  });
  return infoMap;
}

const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
*/

// ===========================================================================

// ANSWER
function solution(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
