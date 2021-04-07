// https://programmers.co.kr/learn/courses/30/lessons/42748
// K번째 수
const { log } = console;

// 1차시, 통과 성공 (프로그래머스에 올라감)
const solution = (array, commands) => {
    const result = [];

    commands.forEach((command) => {
        result.push(
            array
                .slice(command[0] - 1, command[1])
                .sort((a, b) => a - b)
                .find((v, i, arr) => v === arr[command[2] - 1]),
        );
    });

    return result;
};

const [arr, commands] = [
    [1, 5, 2, 6, 3, 7, 4],
    [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
];
log(solution(arr, commands));
