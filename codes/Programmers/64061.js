// https://programmers.co.kr/learn/courses/30/lessons/64061
// 크레인 인형뽑기 게임
const { log } = console;

// 2차시, 통과 성공
const solution = (boards, moves) => {
    let result = 0;
    let basket = [];

    /* 
        [0, 0, 0, 0, 0], 
        [0, 0, 1, 0, 3], 
        [0, 2, 5, 0, 1], 
        [4, 2, 4, 4, 2], 
        [3, 5, 1, 3, 1]
        
        1, 5, 3, 5, 1, 2, 1, 4
    */

    moves.forEach((move) => {
        for (let i = 0; i < boards.length; i++) {
            const board = boards[i];
            const currItem = board[move - 1];

            if (currItem) {
                if (basket[basket.length - 1] === currItem) {
                    result += 2;
                    basket.pop();
                } else {
                    basket.push(currItem);
                }
                board[move - 1] = 0;
                break;
            }
        }
    });

    return result;
};

// ------------------------------------------------------------

/*
// 1차시, 통과 성공 (프로그래머스에 올라감, 예전에 이미 함)
const solution = (board, moves) =>  {
    let result = 0;
    let basket = [];

    for (let i = 0; i < moves.length; i++) {
        let move = moves[i]-1;

        for (let j = 0; j < board.length; j++) {
            let boardTmp = board[j];
            if (boardTmp[move]) {
                if (boardTmp[move] === basket[basket.length-1]) {
                    basket.pop();
                    result += 2;
                } else {
                    basket.push(boardTmp[move]);                    
                }

                boardTmp[move] = 0;
                break;
            } else {
                continue;
            }
        }
    }

    console.log(basket, board)
    return result;
}
*/