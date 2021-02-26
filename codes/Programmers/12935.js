// https://programmers.co.kr/learn/courses/30/lessons/12935
// 제일 작은 수 제거하기

const solution = (arr) => {
    const tmp = arr.filter((v) => Math.min.apply(null, arr) !== v);    
    return tmp.length ? tmp : [-1];
}