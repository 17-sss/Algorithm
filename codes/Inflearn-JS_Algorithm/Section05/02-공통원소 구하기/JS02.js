// ME (일반)
const solution = (arr1, arr2) => arr1.filter((v) => arr2.includes(v)).sort();

const a = [1, 3, 9, 5, 2];
const b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

// ME (투포인터, 답안과 거의 동일)
/* 
function solution(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  let p1 = (p2 = 0);
  const result = [];
  while (arr1.length > p1 && arr2.length > p2) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return result;
}

const a = [1, 3, 9, 5, 2];
const b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
*/


// ANSWER
/*
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort();
  arr2.sort();
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

const a = [1, 3, 9, 5, 2];
const b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
*/
