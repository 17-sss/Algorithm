// ME
function solution(s) {
  const stack = [];
  for (const char of s) {
    if (Number.isNaN(+char)) {
      const resultIdx = stack.length > 1 ? stack.length - 2 : 0;
      const right = stack.pop();
      const left = stack.pop();
      switch (char) {
        case '+': stack[resultIdx] = left + right; break;
        case '*': stack[resultIdx] = left * right; break;
        case '-': stack[resultIdx] = left - right; break;
        case '/': stack[resultIdx] = left / right; break;
        default: break;
      }
    } else stack.push(+char);
  }
  return stack.length ? stack[0] : null;
}
console.log(solution('352+*9-'));

// ---------------------------

// ANSWER
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
