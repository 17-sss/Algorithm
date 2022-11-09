// https://school.programmers.co.kr/learn/courses/30/lessons/134240
// 푸드 파이트 대회

// 1차시, 통과 성공
/**
 * - 너무 보이는대로 풀이함
 * - 배열 하나를 만들고, 뒤집으면 되는데..
 */

function solution(food) {
  const arr1 = [];
  const arr2 = [];
  for (let i = 1; i < food.length; i++) {
    while (true) {
      if (food[i] <= 1) {
        break;
      }
      arr1.push(i);
      arr2.unshift(i);
      food[i] -= 2;
    }
  }
  return [...arr1, 0, ...arr2].join().replace(/\,/g, '');
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution([1, 3, 4, 6]), // "1223330333221"
  solution([1, 7, 1, 2]), // "111303111"
);
