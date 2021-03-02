// https://programmers.co.kr/learn/courses/30/lessons/12903
// 가운데 글자 가져오기
function solution(s) {
    const center = s[(Math.floor((s.length / 2)) + (s.length % 2))-1];
    if (s.length % 2 === 0) {
        return (center + s[Math.floor((s.length / 2))])
    } else
        return center;    
}