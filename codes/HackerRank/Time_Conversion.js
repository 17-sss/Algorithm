// https://www.hackerrank.com/challenges/time-conversion/problem
/*
    * 문제
        - 입력 받은 시간 문자열을 24시간 형식으로 바꾸는 문제
    * 예시
        입력 값: 12:05:01AM
        결과 값: 00:05:01
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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    /*
    * Write your code here.
    */
    let [hour, min, sec] = s.split(":")
    const ampm = (sec.substring(2, sec.length)).toUpperCase();
    sec = sec.replace(ampm, '');

    if ( (ampm === "PM") && (hour !== "12") )
        hour = "" + ((+hour) + 12)
    else if ( (ampm === "AM") && (hour === "12") ) 
        hour = "00";

    return [hour, min, sec].join(":").trim();
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}


// +. 테스트 코드 ---------
/*
function timeConversion(s) {
    let [hour, min, sec] = s.split(":")
    const ampm = (sec.substring(2, sec.length)).toUpperCase();
    sec = sec.replace(ampm, '');
    
    if ( (ampm === "PM") && (hour !== "12") )
        hour = "" + ((+hour) + 12)
    else if ( (ampm === "AM") && (hour === "12") ) 
        hour = "00";
    
    return [hour, min, sec].join(":").trim();
}


let s = "12:05:01PM";
console.log(timeConversion(s));
s = "07:05:45PM";
console.log(timeConversion(s));
s = "11:05:01AM";
console.log(timeConversion(s));
s = "01:05:01PM";
console.log(timeConversion(s));
s = "12:05:01AM";
console.log(timeConversion(s));
*/



