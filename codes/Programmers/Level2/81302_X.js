// https://programmers.co.kr/learn/courses/30/lessons/81302
// 거리두기 확인하기 -------> 보류 

// (2021.12.15) ---------------------
/*
            P
            |
        |   |   |
P   |   |  (P)  |   |   P
        |   |   |
            |
            P
*/
const flagObj = { PERSON: 'P', EMPTY: 'O', PARTIAL: 'X' };
const posObj = {
  E: [0, 3],
  W: [0, -3],
  S: [3, 0],
  N: [-3, 0],
  NW: [-1, -1], // 북서 -> [-1, 0] [0, -1] [-1, -1]
  NE: [-1, 1], // 북동 -> [-1, 0] [0, 1] [-1, 1]
  SW: [1, -1], // 남서 -> [1, 0] [0, -1] [1, -1]
  SE: [1, 1], // 남동 -> [1, 0] [0, 1] [1, 1]
};

/**
 * @param {string[][]} places
 * @param {number} row
 * @param {number} col
 */
const checkPosition = (places, row, col) => {
  const { PERSON, EMPTY, PARTIAL } = flagObj;
  const curr = places[row][col];
  for (const key in posObj) {
    const arrValue = posObj[key];
    const isGreaterThenOne = arrValue.some((v) => Math.abs(v) > 1);
    if (isGreaterThenOne) {

    } else {

    }
  }
};

/**
 * @param {string[][]} places
 */
const solution = (places) => {
  const answer = [];
  for (let row = 0; row < places.length; row++) {
    const rowValue = places[row];
    for (let col = 0; col < rowValue.length; col++) {
      answer.push(checkPosition(places, row, col));
    }
  }
  return answer;
};

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ]), // [1, 0, 1, 1, 1]
);
