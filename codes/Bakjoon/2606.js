// 바이러스
// https://www.acmicpc.net/problem/2606

/* 
    예시 입력 1.
        7
        6
        1 2
        2 3
        1 5
        5 2
        5 6
        4 7
    예시 출력 1.
        4
*/

// 1차시, (보류)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 문제 푸는 곳
const dfs = (result, graph, item = null) => {
    if (graph.length > 0) 
        return dfs(result, graph);

    return result;
};

const solution = (computerNum, list) => {
    const graph = list.map((v) => ({curr: +v[0], next: +v[1], visit: false}));
    const result = dfs(0, [...graph]);
    return result
};

// =================

const main = () => {
    let computerNum, connectLength;
    const list = [];

    rl.on('line', (line) => {
        if (!computerNum) return (computerNum = +line);
        else if (!connectLength) return (connectLength = +line);
        else {
            list.push(line.trim().split(' '));
            if (list.length === connectLength) rl.close();
        }
    }).on('close', () => {
        const result = solution(computerNum, list);
        console.log(result);
        process.exit();
    });
};

main();
