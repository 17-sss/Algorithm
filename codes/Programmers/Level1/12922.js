// https://programmers.co.kr/learn/courses/30/lessons/12922
// 수박수박수박수박수박수?
/* 
    [1] 내 풀이 메모        
        1. 풀이
            1) 받아온 n값만큼 순회 (++가 아닌 --)
            2) 2로 나누었을 때, 나머지가 1이라면 '수'
                2로 나누었을 때, 나머지가 0이라면 '박'
                값을 result 배열에 push
            3) 박수가 나오는 걸 방지하기위해 reverse() 해준 뒤 join()
*/

// 1차시, 통과 성공
function solution(n) {
    const result = [];
    let tmpN = n;

    while (tmpN > 0) {
        if (tmpN % 2 !== 0) result.push('수');
        else result.push('박');
        tmpN--;
    }

    return result.reverse().join('');
}
