// https://programmers.co.kr/learn/courses/30/lessons/43165
// 타겟 넘버
// (전부 참고해버렸다. 참고해도 모른다. 공부하고 하자..)

// 3차시, 풀기 전에... DFS BFS를 공부하자 (https://youtu.be/7C9RgOcvkvo)
// 다익스트라, 벨만 포드, 플로이드 와샬, 타잔??





// 2차시, 통과 실패 (참고한 코드)
// https://velog.io/@kimtaeeeny/프로그래머스-타겟-넘버-javascript 참고
/*
const solution = (numbers, target) => {
    let result = 0;
    dfs(numbers, target, result, 0, 0);
    return result;
};

const dfs = (numbers, target, result, sum, loopIdx) => {
    if (loopIdx === numbers.length) return;
    if (sum === target) result++;

    dfs(numbers, target, result, sum + numbers[loopIdx], loopIdx + 1);
    dfs(numbers, target, result, sum - numbers[loopIdx], loopIdx + 1);
};

solution([1, 1, 1, 1, 1], 3); // 5
*/

// 1차시, 통과 실패 (참고한 코드)
/*
const bfs = (numbers, target, currSum, loopIdx) => {
    if (loopIdx === numbers.length) {
        if (currSum === target) return 1;
        else 0;
    }

    let result = 0;
    result += bfs(numbers, target, currSum + numbers[loopIdx], loopIdx+1);
    result += bfs(numbers, target, currSum - numbers[loopIdx], loopIdx+1);
    return result;
};
const solution = (numbers, target) => bfs(numbers, target, numbers[0], 1) + bfs(numbers, target, -numbers[0], 1);
*/