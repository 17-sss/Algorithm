// https://leetcode.com/problems/minimum-path-sum/
// 64. Minimum Path Sum
/* 
    2차원 배열 (grid) 에서 마지막 배열의 마지막 값까지 가는데 필요한 최소비용을 계산하는 문제 (DP 문제)
    각 값까지 가는데 드는 비용 공식
    F(x, y) = cost(x, y) + Math.min(F(x-1, y), F(x, y-1));
*/


// 1차시, 통과 성공
// Runtime: 72 ms, faster than 97.49% | Memory Usage: 40.5 MB, less than 60.03%
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = (grid) => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            const value1 = y ? grid[y-1][x] : -1;    // F(x, y-1)을 뜻함
            const value2 = x ? grid[y][x-1] : -1;    // F(x-1, y)을 뜻함
            let min = 0;

            if (value1 <= -1 && value2 >= 0) min = value2
            else if (value1 >= 0 && value2 <= -1) min = value1
            else if (value1 <= -1 && value2 <= -1) min = 0
            else min = Math.min(value1, value2);

            grid[y][x] = grid[y][x] + min;
        }
    }

    const lastRowIdx = grid.length-1;
    const lastColIdx = grid[grid.length-1].length-1;

    const result = grid[lastRowIdx][lastColIdx];
    return result;
};

minPathSum([[1,3,1],[1,5,1],[4,2,1]]);  // 7