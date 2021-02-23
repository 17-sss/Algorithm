// https://programmers.co.kr/learn/courses/30/lessons/12906
// 같은 숫자는 싫어
/*
    [1] 내 풀이 메모
        1. 풀이
            - arr을 순회하면서 바로 다음 값이 있을 경우엔 continue(return)
            - 반대의 경우엔 최종반환 값인 answer에 push
*/

function solution(arr) {
    const answer = [];
    arr.forEach((v, i) => {        
        if (v === arr[i+1]) return                
        return answer.push(v);
    })
    
    return answer;
}