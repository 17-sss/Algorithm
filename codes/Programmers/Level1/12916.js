// https://programmers.co.kr/learn/courses/30/lessons/12916
// 문자열 내 p와 y의 개수
/* 
    [1] 내 풀이 메모        
        1. 풀이
            1) 받아온 s를 소문자 변환 후, 배열로 변환
            2) p와 y의 갯수를 센 후 두 값 비교. (filter 활용)            
*/

// 1차시, 통과 성공
function solution(s){
    const arrStr = s.toLowerCase().split('');
    const pCnt = arrStr.filter((v) => v === 'p').length;
    const yCnt = arrStr.filter((v) => v === 'y').length;
        
    return (pCnt === yCnt);
}

solution("pPoooyY");    // true
solution("Pyy");        // false