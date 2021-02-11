// https://programmers.co.kr/learn/courses/30/lessons/70128
// 내적
/* 
    [1] 내 풀이 메모        
        1. 풀이
            1) a 와 b 배열의 길이는 같음
            2) a 배열을 기준으로 순차적으로 a[i] * b[i] 해줌
            3) 2)에서 나온 값을 result에 + 
            4) 배열의 마지막 위치까지 돌은 다음에 return            
*/

// 1차시, 통과 성공
function solution(a, b) {
    let result = 0;
    a.forEach((v, i) => {
        const aValue = v;
        const bValue = b[i];
        
        return result += aValue * bValue
    });
    
    return result;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]); // 3
solution([-1, 0, 1], [1, 0, -1]);       // -2
