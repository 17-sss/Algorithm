// https://school.programmers.co.kr/learn/courses/30/lessons/133502
// 햄버거 만들기

// 3차시, 통과 성공
/**
 * [참고]: https://yongku.tistory.com/entry/프로그래머스-햄버거-만들기-자바JAVA
 * - 시간복잡도 신경써야하는 문제
 * - ingredient를 수정하기보다는 스택을 활용해서 풀었어야 함
 */
function solution(ingredient) {
  const complentes = [1, 2, 3, 1];
  const temps = [];
  let result = 0;
  for (let i = 0; i < ingredient.length; i++) {
    temps.push(ingredient[i]);
    if (
      temps.length >= 4 &&
      complentes[complentes.length - 1] === temps[temps.length - 1] &&
      complentes[complentes.length - 2] === temps[temps.length - 2] &&
      complentes[complentes.length - 3] === temps[temps.length - 3] &&
      complentes[complentes.length - 4] === temps[temps.length - 4]
    ) {
      for (let j = 0; j < 4; j++) {
        temps.pop();
      }
      result++;
    }
  }
  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution([2, 1, 1, 2, 3, 1, 2, 3, 1]), // 2
  solution([1, 3, 2, 1, 2, 1, 3, 1, 2]), // 0
);

// 2차시, 통과 실패
/* 
function solution(ingredient) {
  let result = 0;
  while (ingredient.join().replace(/\,/g, '').indexOf('1231') !== -1) {
    const startIdx = ingredient.join().replace(/\,/g, '').indexOf('1231');
    ingredient.splice(startIdx, 3);
    result++;
  }
  return result;
}
 */

// 1차시, 통과 실패
/* 
function solution(ingredient) {
  const COMPLETE_NUMS = [1, 2, 3];
  let tasks = [];
  let result = 0;

  while (ingredient.join().replace(/\,/g, '').indexOf('1231') !== -1) {
    ingredient.forEach((item, i) => {
      if (tasks.length === 0 && item === 1) {
        const nextItem = ingredient[i + 1];
        if (!nextItem || item + 1 !== nextItem) {
          return;
        }

        ingredient[i] = -1;
        tasks.push(item);
        return;
      }
      if (tasks.length > 0) {
        const taskLastItem = tasks[tasks.length - 1];
        if (taskLastItem === 3 && item === 1) {
          ingredient[i] = -1;
          tasks = [];
          result++;
          return;
        }
        const toNextIdx = COMPLETE_NUMS.findIndex((num) => num === taskLastItem) + 1;
        if (toNextIdx <= 0) {
          return;
        }
        const toNextItem = COMPLETE_NUMS[toNextIdx];
        if (toNextItem !== item) {
          return;
        }
        ingredient[i] = -1;
        return tasks.push(item);
      }
    });

    ingredient = ingredient.filter((item) => item !== -1);
  }

  return result;
}
*/
