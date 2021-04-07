// https://programmers.co.kr/learn/courses/30/lessons/12969
// 직사각형 별찍기
/*
    [1] 내 풀이 메모
        1. 풀이
            - 일단 한 행당 별이 얼마나 들어가는지 체크. (oneRow)
            - 2번째 값만큼 oneRow를 생성 + \n
*/

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    const oneRow = Array.from({length: a}, () => '*').join('');
    const result = Array.from({length: b}, () => oneRow + '\n').join('');
    console.log(result)
});