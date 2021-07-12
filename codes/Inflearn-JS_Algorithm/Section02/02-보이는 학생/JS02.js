// ME (오답)
function solution(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        const prev = arr[i - 1];
        const curr = arr[i];
        if (prev < curr) result++;
    }
    return result;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));


// ME
function solution(arr) {
    let result = 0;
    let max = Number.MIN_VALUE;
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (curr <= max) continue;
        max = curr;
        result++;
    }
    return result;
}

// ANSWER
function solution(arr) {
    let answer = 1,
        max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            answer++;
            max = arr[i];
        }
    }
    return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
