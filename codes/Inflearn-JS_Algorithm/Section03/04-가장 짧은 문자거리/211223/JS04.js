// ME
function solution(s, t) {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      result.push(0);
      continue;
    }

    let leftAbs = -1;
    let rightAbs = -1;
    for (let left = i - 1; left >= 0; left--) {
      if (t === s[left]) {
        leftAbs = Math.abs(i - left);
        break;
      }
    }

    for (let right = i + 1; right < s.length; right++) {
      if (t === s[right]) {
        rightAbs = Math.abs(right - i);
        break;
      }
    }

    leftAbs === -1 && (leftAbs = Number.MAX_SAFE_INTEGER);
    rightAbs === -1 && (rightAbs = Number.MAX_SAFE_INTEGER);
    if ([leftAbs, rightAbs].every((v) => v === Number.MAX_SAFE_INTEGER)) continue;

    result.push(Math.min(leftAbs, rightAbs));
  }
  return result;
}

console.log(solution('teachermode', 'e')); // [1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]
