// ME (일반)
/* 
function solution(need, plan) {
  const stack = [];
  for (const char of plan) {
    if (!need.includes(char)) continue;
    stack.push(char);
  }
  return stack.join('') === need ? 'YES' : 'NO';
}

console.log(solution('CBA', 'CBDAGE')); // YES
*/

// ME (Queue)
function solution(need, plan) {
  const queue = Array.from({ length: need.length }, (_, i) => need[i]);
  for (const char of plan) {
    if (!queue.includes(char)) continue;
    if (queue.length && queue[0] === char) queue.shift();
    else return 'NO';
  }
  return queue.length ? 'NO' : 'YES';
}

console.log(solution('CBA', 'CBDAGE')); // YES

// ---------------------------

// ANSWER
function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO';
    }
  }
  if (queue.length > 0) return 'NO';
  return answer;
}

console.log(solution('CBA', 'CBDAGE')); // YES
