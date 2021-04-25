// https://programmers.co.kr/learn/courses/30/lessons/42746
// 가장 큰 수

// 1차시, 통과 실패
/*
class Num {
    constructor(num, idx) {
        this.num = num;
        this.idx = idx;
        this.tempNum = null;
    }
}

function createTempNum(number) {
    let result = '';
    while (result.length < 5) result += number;
    if (result.length > 5) result = result.substring(0, 5);
    return result;
}

function solution(numbers) {
    const arrResult = numbers.map((v, i) => new Num(v, i));

    for (let i = 0; i < numbers.length; i++) {
        const curr = arrResult.find((v) => v.num === numbers[i]);
        curr.tempNum = createTempNum(numbers[i]);
    }
    arrResult.sort((a, b) => Number(b.tempNum) - Number(a.tempNum));

    const result = arrResult.reduce(
        (initValue, curr) => (initValue += curr.num),
        '',
    );

    return result;
}
*/
