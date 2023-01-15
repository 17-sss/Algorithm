// ME
function solution(arr) {
  const rankArr = [...arr].sort((a, b) => b - a); // 순위 전용 arr, 내림차순으로 정렬
  return arr.map((v) => {
    const rank = rankArr.indexOf(v);
    return rank > -1 ? rank + 1 : rank;
  });
}

const arr = [87, 89, 92, 100, 76];
const arr2 = [87, 87, 100, 50, 42, 100, 87];
console.log(solution(arr)); // [4, 3, 2, 1, 5]`
console.log(solution(arr2)); // [3, 3, 1, 6, 7, 1, 3]

// ANSWER
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

const arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
