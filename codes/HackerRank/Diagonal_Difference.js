// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    * 문제
        - 대각선에 있는 값들을 전부 연산 후, (왼쪽 대각, 오른 대각) 2개의 값의 절대차를 구하는 문제임.
    * 예시        
        입력 값: 3
        현재 배열:
            11 2 4
            4 5 6
            10 8 -12
        결과 값: 15
*/

// 1. 해커랭크 전용 코드 ---------
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    const arrV1 = [], arrV2 = [];
    for (let i = 0; i < arr.length; i++) {
        arrV1.push(arr[i][i]);
        arrV2.push(arr[i][arr.length-(i+1)]);    
    }
    const v1 = arrV1.reduce((prev, curr) => prev + curr, 0);
    const v2 = arrV2.reduce((prev, curr) => prev + curr, 0);
    let result = ('' + (v1 - v2));
    result = (result.indexOf('-') > -1) 
        ? parseInt(result.replace('-', '')) 
        : parseInt(result);
        
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}


// +. 테스트 코드 ---------
/*
const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
// const arr = [ [ 11, 2, 4, 2 ], [ 4, 5, 6, 7 ], [ 10, 8, -12, -20 ],  [ 7, 8, -8, 9 ] ];
// console.log(arr[0][0], arr[1][1], arr[2][2])
// console.log(arr[0][2], arr[1][1], arr[2][0])

const arrV1 = [], arrV2 = [];
for (let i = 0; i < arr.length; i++) {
    arrV1.push(arr[i][i]);
    arrV2.push(arr[i][arr.length-(i+1)]);    
}
const v1 = arrV1.reduce((prev, curr) => prev + curr, 0);
const v2 = arrV2.reduce((prev, curr) => prev + curr, 0);
let result = ('' + (v1 - v2));
result = (result.indexOf('-') > -1) ? parseInt(result.replace('-', '')) : parseInt(result);



console.log(result );
*/
