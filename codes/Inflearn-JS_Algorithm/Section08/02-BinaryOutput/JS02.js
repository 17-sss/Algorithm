// ME
function solution(n) {
    function DFS(n) {
        if (n === 0) return;
        else {
            DFS(Math.floor(n / 2));
            result += n % 2;
        }
    }
    let result = '';
    DFS(n);

    return result;
}

console.log(solution(11));

// 답
function solution(n) {
    let answer = '';
    function DFS(n) {
        if (n === 0) return;
        else {
            DFS(parseInt(n / 2));
            answer += String(n % 2);
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(11));
