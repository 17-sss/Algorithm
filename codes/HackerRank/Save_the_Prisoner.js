// https://www.hackerrank.com/challenges/save-the-prisoner/problem
/*
    * 문제
        - 죄수 수(n), 간식 수(m), 의자 수(s)가 주어진다.
        - 죄수를 의자에 순서대로 앉히며 간식을 1개씩 준다.  (마지막 죄수까지 반복)
        - 마지막 간식은 폭탄이다. 마지막 간식을 받는 죄수번호를 구해라

    * 예시        
        입력 값: 5 2 1
        결과 값: 2

        입력 값: 5 2 2
        결과 값: 3

        입력 값: 7 19 2
        결과 값: 6

        입력 값: 3 7 3
        결과 값: 3
    
    * 메모
        죄수(n): 7
        간식(m): 19
        의자(s): 2
            1 	2 	3 	4 	5 	6 	7 

                1 	2 	3 	4 	5 	6 
            7 	8 	9 	10 	11 	12 	13
            14 	15 	16 	17 	18 	19
                                (!)
        > 풀어써보기
            1) 일단 의자는 2개다. 간식 뿌리기를 2번부터 시작한다하면, +2가아닌 +1이어야 2부터 시작 가능. 
                - 간식 + 의자(-1)
            2) 1)의 값을 죄수 수만큼 나머지한다면.. 
                - (간식 + 의자(-1)) % 죄수
                            20     % 7 ==> 6
            3) 분명 2)의 값이 0이 될 경우도 있을 것. 이 경우 죄수의 수가 최종값이 되며, 다른 경우는 위 값이 최종값.
*/

// 1. 해커랭크 전용 코드 ---------
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    return ( (m + (s-1)) % n ) % n ? ( (m + (s-1)) % n ) : n
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nms = readLine().split(' ');

        const n = parseInt(nms[0], 10);

        const m = parseInt(nms[1], 10);

        const s = parseInt(nms[2], 10);

        let result = saveThePrisoner(n, m, s);

        ws.write(result + "\n");
    }

    ws.end();
}


// +. 테스트 코드 ---------
/*
function saveThePrisoner(n, m, s) {
    // return ( (m % n) + (s-1) )	// 왜 오답인지는 모르겠어
    return ( (m + (s-1)) % n ) % n ? ( (m + (s-1)) % n ) : n
}

// 입력 값: 5 2 1
// 결과 값: 2
console.log(saveThePrisoner(5, 2, 1))

// 입력 값: 5 2 2
// 결과 값: 3
console.log(saveThePrisoner(5, 2, 2))

// 입력 값: 7 19 2
// 결과 값: 6
console.log(saveThePrisoner(7, 19, 2))

// 입력 값: 3 7 3
// 결과 값: 3
console.log(saveThePrisoner(3, 7, 3))
*/
