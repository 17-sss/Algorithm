// https://programmers.co.kr/learn/courses/30/lessons/12982
// Summer/Winter Coding(~2018) - 예산
/* 
    [1] 내 풀이 메모        
        1. 풀이
            1) 일단 d를 오름차순 정렬
            2) 이중배열 순회하며 budget과 같거나 작은값까지 cnt++ 후, 최종 임시배열에 추가
            3) 임시배열에서 제일 큰 값을 결과값으로 만듬
*/

// 1차시, 통과 성공
function solution(d, budget) {
    let answer = 0;
    const arrTmp = [];
    d.sort((a, b) => a - b);

    for (let i = 0; i < d.length; i++) {
        const val1 = d[i];

        if (val1 > budget) continue;

        let tmpCalc = val1;
        let cnt = 1;

        for (let j = i + 1; j < d.length; j++) {
            const val2 = d[j];
            tmpCalc += val2;

            if (tmpCalc > budget) continue;
            else cnt++;
        }

        arrTmp.push(cnt);
    }

    answer = arrTmp.reduce((prev, curr) => (prev > curr ? prev : curr), 0);

    return answer;
}

solution([1, 3, 2, 5, 4], 9); // 3
solution([2, 2, 3, 3], 10);   // 4