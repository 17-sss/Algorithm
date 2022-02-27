// ME
function solution(s) {
  let result = '';
  for (const char of s) {
    const code = char.charCodeAt();
    if (code >= 97 && code <= 122) result += char.toUpperCase();
    else result += char;
  }
  return result;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));

// ANSWER
function solution(s) {
  let answer = '';
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;

    //if(x===x.toLowerCase()) answer+=x.toUpperCase();
    //else answer+=x;
  }

  return answer;
}

let str = 'ItisTimeToStudy';
console.log(solution(str));
