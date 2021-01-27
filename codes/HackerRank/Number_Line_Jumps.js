// https://www.hackerrank.com/challenges/kangaroo/problem
/*
    * 문제
        - 캥거루 x1, x2가 주어져 있으면 각 캥거리의 출발위치 x1, x2와 점프 거리 v1, v2가 주어진다.
        - 동일한 횟수의 Jump로 두 캥거루 k1, x2가 같은 위치에 있으면 [YES]를 출력하고 불가능하면 [NO]를 출력한다.

    * 예시        
        입력 값: 0 3 4 2
        결과 값: YES

        입력 값: 0 2 5 3
        결과 값: NO

    * 기타 메모
        - 이 문제는 딱! 맞물리는 지점을 넘거나 맞물릴 경우 1번만 체크함. 계속 루프도는게 아냐!
            (동일한 점프 수)
        - 꼭 x2의 시작점은 x1보다 앞서있음!

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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    let result = false;
    
    if(x2 > x1 && v2 < v1) {
        while(true) {
            x1 += v1;
            x2 += v2;

            if(x1 === x2) {
                result = true;
                break;
            } else if (x1 > x2) {
                result = false;
                break;
            }
        }
    }

    return result ? "YES" : "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}



// +. 테스트 코드 ---------
/*
const {log} = console;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
});

function main() {
    let k1, v1, x2, v2;
    
    rl.prompt(); 

    rl.on('line', (line) => {
        line === 'exit' && rl.close();
        if (line.split(" ").length === 4) {
            [k1, v1, x2, v2] = line.split(" ").map(v => +v);            
            rl.close();
        }
        
        rl.prompt(); 
    }).on('close', () => {        
        const kangaroo = (x1, v1, x2, v2) => {
            let result = false;
            if (v1 > v2) {
                while(true) {
                    if (x1 > x2) {
                        // 캥거루1이 캥거루2의 위치를 순식간에 뛰어넘어버리면.. false반환
                        result = false;
                        break;
                    }

                    x1 += v1;
                    x2 += v2;

                    if (x1 === x2) {
                        result = true;
                        break;
                    }
                }
            }
            return result ? "YES" : "NO";
        }
        log(kangaroo(x1, v1, x2, v2));        

        process.exit();
    });
}

main();
*/