// ME
function solution(m, arr) {
  let sum = (left = cnt = 0);
  for (let right = 0; right < arr.length; right++) {
    const v1 = arr[right];
    sum += v1;
    while (sum > m) {
      const v2 = arr[left];
      sum -= v2;
      left++;
    }
    if (sum <= m) cnt += right - left + 1;
  }
  return cnt;
}

const a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

// ANSWER
function solution(m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

const a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
