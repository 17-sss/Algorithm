// ME, 합이 100이 나오는 난쟁이들로 구성되어 리턴하지만 뭔가 이상.. (출력 예시 값과 같게 나오지 않음)
function solution(arr) {
    const arrList = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            arrList.push(arr.slice(i, j + 1));
        }
    }
    return arrList.filter(
        (arr) =>
            arr.reduce((result, value) => ((result += value), result), 0) ===
            100,
    )[0];
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// ANSWER
function solution1(arr) {
    let answer = arr;
    let sum = answer.reduce((a, b) => a + b, 0);
    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (sum - (answer[i] + answer[j]) == 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }
    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
