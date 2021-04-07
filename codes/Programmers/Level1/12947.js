// https://programmers.co.kr/learn/courses/30/lessons/12947
// 하샤드 수
function solution(x) {    
    const sum = (""+x).split('').reduce((result, value) => (+result + +value),0);
    return (x % sum === 0)
}