// https://programmers.co.kr/learn/courses/30/lessons/12912
// 두 정수 사이의 합
function solution(a, b) {    
    const start = (a > b) ? b : a;
    const end = (a > b) ? a : b;
    if (start === end) return start;
    
    const arrTmp = [];
    for (let i = 1; i < (end-start); i++) {        
        arrTmp.push(i+start);
    }
    
    return arrTmp.reduce((prev, curr) => prev + curr , (start+end));
}