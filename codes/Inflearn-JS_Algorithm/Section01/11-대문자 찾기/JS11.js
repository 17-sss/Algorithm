// ME
function solution(s) {
  let cnt = 0;
  for (const char of s) {
    if (typeof char !== 'string') continue;
    const code = char.charCodeAt();
    if (code >= 65 && code <= 90) cnt++;
  }
  return cnt;
}

let str = 'KoreaTimeGood';
console.log(solution(str));

// ANSWER
function solution(s) {
  let answer = 0;
  for (let x of s) {
    //let num=x.charCodeAt();
    //if(num>=65 && num<=90) answer++;
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

let str = 'KoreaTimeGood';
console.log(solution(str));
