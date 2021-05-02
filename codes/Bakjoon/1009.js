// https://www.acmicpc.net/problem/1009

/* 
    + 참고링크
        https://m.blog.naver.com/ephraimdrlee/221527277790
        
    1. 예제 입력
        1) 테스트 케이스 갯수: 5
        2) 각각의 테스트 케이스에 대해 정수 a와 b   (1 ≤ a < 100, 1 ≤ b < 1,000,000)
            a, b
            1 6     (1의 6승: 1)
            3 7     (3의 7승: 2187)
            6 2     (6의 2승: 36)
            7 100   (7의 100승: 3.234476509624758e+84)
            9 635   (9의 635승: )
    2. 예제 출력    
        1) 마지막 데이터가 처리되는 컴퓨터의 번호를 출력)
            1
            7
            6
            1
            9
    3. 1대의 컴퓨터당 처리하는 데이터 예시 메모
        1c 	1d  11d ..
        2c 	2d  12d ..
        3c 	3d  13d ..
            (...)
        10d	10d 20d ..
*/

// 5차시. 통과성공.    FINAL
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main() {
    let tc = 0; // 테스트 케이스 카운트
    const arrResult = [];

    rl.on('line', (line) => {
        if (!tc) {
            if (isNaN(line)) tc = 1;
            else tc = +line;
        } else {
            arrResult.push(
                line
                    .trim()
                    .split(' ')
                    .map((v) => +v),
            );

            if (arrResult.length === tc) rl.close();
        }
    }).on('close', () => {
        arrResult.forEach((v, i) => {
            const [a, b] = v;
            let com = 1;

            const reminderB = (b % 4) + 4;
            com = a ** reminderB % 10 ? a ** reminderB % 10 : 10;

            console.log(com);
        });
        process.exit();
    });
}
main();

/*
// 4차시. 통과성공.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let tc = 0; // 테스트 케이스 카운트
const arrResult = [];

rl.on('line', (line) => {      
    if (!tc) {
        tc = +line;             
    } else {          
        arrResult.push(line.trim().split(" "));
        
        if (arrResult.length === tc)    
            rl.close();
    }    
}).on('close', () => {
    arrResult.forEach((v, i) => {
        const a = +v[0];
        const b = +v[1];
        let com = 1;

        // ▼ +4 해줘야하나봄.. 결과 값은 똑같이 나와도
        const reminderB = b % 4 + 4;  // 1~9 숫자의 몇 승마다 보이는 규칙.. 4단위(ex. 1승~5승)마다 뒷자리가 같아.    (나머지 나오는 값 1 2 3 0 반복)
        com = ((a ** reminderB) % 10) ? ((a ** reminderB) % 10) : 10;
        
        console.log(com);
    });
    process.exit();
});
*/

// 3차시. 통과실패(출력초과).
/*  
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function main () {
    let tc = 0; // 테스트 케이스 카운트
    const arrResult = [];

    rl.setPrompt('> ');
    rl.prompt();

    rl.on('line', (line) => {      
        if (line.toLowerCase() === "q")     
            rl.close();
        
        if (!tc) {
            if(isNaN(line))
                tc = 1
            else
                tc = +line;             
        } else {
            let arrItem = line.trim().split(" ").map(v => +v);            
            arrResult.push(arrItem);
            
            if (arrResult.length === tc)    
                rl.close();
        }
        rl.prompt();
    }).on('close', () => {
        arrResult.forEach((v, i) => {
            const [a, b] = v;
            let com = 1;

            const reminderB = b % 4;  // 1~9 숫자의 몇 승마다 보이는 규칙.. 4단위(ex. 1승~5승)마다 뒷자리가 같아.    (나머지 나오는 값 1 2 3 0 반복)
            com = ((a ** reminderB) % 10) ? ((a ** reminderB) % 10) : 10;
            
            console.log(`${i+1}차시: `, com);
        });
        process.exit();
    });
};

main();
*/

// 2차시. 통과실패(틀렸습니다)
/* 
const data = `1 6
3 7
6 2
7 100
9 635
`;

const main = (data) => {
    const result = [];
    const input = data.toString().trim().split('\n');    

    for (let i = 0; i < input.length; i++) {
        let [a, b] = input[i].split(" ").map(e => +e);
        const reminderB = b % 4;  // 몇 승마다 보이는 규칙.. 4단위마다 뒷자리가 같아.    
        let com = ((a ** reminderB) % 10) ? ((a ** reminderB) % 10) : 10;
        result.push(com);
    };
    return result;
};

console.log(main(data));
*/

// 1차시
/* 
const main = (arrA, arrB) => {    
    if (!Array.isArray(arrA) || !Array.isArray(arrB))
        return console.log('error');
    if (arrA.length !== arrB.length) 
        return console.log('두 값의 배열의 길이가 동일하지 않습니다.');
};

// main([1,3,6,7,9], [6,7,2,100,635]);
*/
