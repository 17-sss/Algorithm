// ME
function solution(arr) {
    let result = 0;
    let tmp = 0;
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr) tmp++;
        else tmp = 0;
        result += tmp;
    }
    return result;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));

// ANSWER
function solution(arr) {
    let answer = 0,
        cnt = 0;
    for (let x of arr) {
        if (x === 1) {
            cnt++;
            answer += cnt;
        } else cnt = 0;
    }

    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
