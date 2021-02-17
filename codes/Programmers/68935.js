// https://programmers.co.kr/learn/courses/30/lessons/68935
// 3진법 뒤집기
/* 
    [1] 내 풀이 메모
        1. 풀이
            1) 먼저 입력받은 n을 삼진법으로 변환. (while문 사용)
                - n을 나머지 함수를 활용하여 3으로 나눔. 
                    나오는 값을 임시배열에 넣어줌.
                    그 후 n을 진짜 3으로 나눈 뒤, Math.floor 해줌.
                - 반복문을 다 돌게되면, 삼진법이 거꾸로 된 상태로 결과 값이 나옴.
            2) 거꾸로 되어 있는 임시배열의 값을 다시 reverse해주어 제대로 된 삼진법으로 만듬.
            3) reduce를 활용, 배열의 값을 순차적으로 돌면서 "현재 값 * (3**i)"을 최종값 (prev)에 계속 더해줌.
*/

function solution(n) {
    const arrTmp = [];
    
    while(n > 0) {
        const remainder = n % 3;
        arrTmp.push(remainder);
        
        n = Math.floor(n / 3);
    }
    
    return arrTmp.reverse().reduce((prev, curr, i) => prev += (curr * (3**i)), 0);
}

solution(45);   // 7
solution(125);  // 229