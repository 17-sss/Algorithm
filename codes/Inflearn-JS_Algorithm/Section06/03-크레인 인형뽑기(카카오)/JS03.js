// ME
function solution(board, moves) {
  const stack = [];
  let result = 0;
  moves.forEach((move) => {
    const col = move - 1;
    let row = 0;
    while (row < board.length) {
      const item = board[row][col];
      if (item) {
        if (stack.length && stack[stack.length - 1] === item) {
          stack.pop();
          result += 2;
        } else stack.push(item);
        board[row][col] = 0;
        break;
      }
      row++;
    }
  });
  return result;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
); // 4

// ---------------------------

// ANSWER
function solution(board, moves) {
  let answer = 0;
  let stack = [];
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
