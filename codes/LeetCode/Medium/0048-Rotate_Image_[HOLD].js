// https://leetcode.com/problems/rotate-image/
// 48. Rotate Image

// 2차시, 그냥 실습..
// 참고 (https://velog.io/@rud285/leetcode-Rotate-Image-javascript)
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
    let Q = [];

    matrix.forEach((arr) => Q.push(...arr));

    for (let i = matrix.length - 1; i >= 0; i--) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][i] = Q.shift();
        }
    }

    /*
        j   0   1   2
        i   2
            [j0][i2] -> 1
            [j1][i2] -> 2
            [j2][i2] -> 3

        j   0   1   2
        i   1
            [j0][i1] -> 4
            [j1][i1] -> 5
            [j2][i1] -> 6

        j   0   1   2
        i   0
            [j0][i0] -> 7
            [j1][i0] -> 8
            [j2][i0] -> 9

        - 이 로직은 matrix의 안의 모든 값(배열)들을 전부 펼쳐주어 
            임의의 array (여기선 Q)에 push 해준 후
            90도가 회전되었을 때의 위치 값(idx)을 기반으로 넣어주는 것 같음.
            Rotate라고는 보기 힘든 듯.
    */
};

rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]); // [[7,4,1],[8,5,2],[9,6,3]]


// ======================================

// 1차시, 규칙 끄적끄적..
/*
const rotate = (matrix) => {
    // 끄적 1
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix.length; j++) {
            // i: 0     j: 0 1 2
                // 0 0 -> 0 2
                // 0 1 -> 1 1
                // 0 2 -> 2 2

            // i: 1     j: 1 2
                // 1 1 -> 1 1
                // 1 2 -> 2 1

            // i: 2     j: 2
                // 2 2 -> 2 0
            console.log('i:' + i, 'j: ' + j);
            console.log('matrix[i][j]:' + matrix[i][j]);
            console.log();
        }
    }
    // -----------------

    // 끄적 2
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // 0 0 -> 0 2
            // 0 1 -> 1 2
            // 0 2 -> 2 2

            // 1 0 -> 0 1
            // 1 1 -> 1 1
            // 1 2 -> 2 1

            // 2 0 -> 0 0
            // 2 1 -> 1 0
            // 2 2 -> 2 0
        }
    }
};

rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]); // [[7,4,1],[8,5,2],[9,6,3]]
*/
