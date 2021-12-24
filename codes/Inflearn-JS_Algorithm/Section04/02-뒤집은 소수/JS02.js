// ME
const isPrime = (num) => {
  let result = true;
  if (num < 2) return false;
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return result;
};

const solution = (arr) =>
  arr.reduce((result, v) => {
    const reverseValue = +`${v}`.split('').reverse().join('');
    isPrime(reverseValue) && result.push(reverseValue);
    return result;
  }, []);

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr)); // [23, 2, 73, 2, 3]

// ANSWER (답 2개임. 1번째 답)
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
