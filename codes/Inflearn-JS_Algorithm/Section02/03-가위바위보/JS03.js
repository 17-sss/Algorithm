/* 
> 이긴 사람 출력. 비기면 D 출력
> 가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보

입력: `[2, 3, 3, 1, 3], [1, 1, 2, 2, 3]`
- 첫 번째 매개변수: A가 낸 가위 바위 보 정보
- 두 번째 매개변수: B가 낸 가위 바위 보 정보 
*/

// ME
function solution(a, b) {
    const result = [];
    for (let i = 0; i < a.length; i++) {
        const aAnswer = a[i];
        const bAnswer = b[i];

        if (aAnswer === bAnswer) {
            result.push('D');
            continue;
        }

        if (
            (aAnswer === 1 && bAnswer === 3) ||
            (aAnswer === 2 && bAnswer === 1) ||
            (aAnswer === 3 && bAnswer === 2)
        )
            result.push('A');
        else result.push('B');
    }
    return result;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b)); // A B A B D

// ANSWER
function solution(a, b) {
    let answer = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) answer += 'D ';
        else if (a[i] === 1 && b[i] === 3) answer += 'A ';
        else if (a[i] === 2 && b[i] === 1) answer += 'A ';
        else if (a[i] === 3 && b[i] === 2) answer += 'A ';
        else answer += 'B ';
    }

    return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
