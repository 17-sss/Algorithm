// ME
function solution(day, arr) {
    return arr.reduce((result, value) => {
        const lastNum = value % 10;
        if (lastNum === day) result++;
        return result;
    }, 0);
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

// ANSWER
function solution(day, arr) {
    let answer = 0;
    for (let x of arr) {
        if (x % 10 == day) answer++;
    }

    return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
