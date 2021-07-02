function solution(n) {
    let answer = '';
    function DFS(v) {
        if (v > 7) return;
        else {
            answer += v + ' ';
            DFS(v * 2);
            DFS(v * 2 + 1);
            /*
            1. 전위순회
            answer += v + ' ';
            DFS(v * 2);
            DFS(v * 2 + 1);

            2. 중위순회
            DFS(v * 2);
            answer += v + ' ';
            DFS(v * 2 + 1);

            3. 후위순회
            DFS(v * 2);
            answer += v + ' ';
            DFS(v * 2 + 1);
            */
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));
