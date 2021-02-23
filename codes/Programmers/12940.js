// https://programmers.co.kr/learn/courses/30/lessons/12940
// 최대공약수와 최소공배수
function solution(n, m) {
    let max, min;
    
    const nLoop = Math.max(n, m);    
    for (let i = 0; i <= nLoop; i++) {
        max = !(n % i) && !(m % i) ? i : max;
    }
    min = (n * m) / max;
    
    return [max, min];
}