// https://programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사 - 수포자
/*
    1번 수포자가 찍는 방식: 1, 2, 3, 4, 5 ...
    2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, ...
    3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

    .. 나머지 연산자 자세히 알아보기. (1 % 14 = 1이고 0 % 14는 0? 나누기랑은 다른 개념인듯함
*/
const { log } = console;

// 3차시, 통과 성공 
function solution(answers) {    
    const result = [];
    const students = {
        1: {
            answer: [1, 2, 3, 4, 5],
            rightAnsCnt: 0,
        },
        2: {
            answer: [2, 1, 2, 3, 2, 4, 2, 5],
            rightAnsCnt: 0,
        },
        3: {
            answer: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
            rightAnsCnt: 0,
        },
    };

    let nLoop = 0;

    while (answers.length > nLoop) {
        let currRightAnswer = answers[nLoop];

        for (const key in students) {
            const student = students[key];
            // [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
            // [1, 3, 2, 4, 2, 1, 3, 2, 4, 2,   1, 3, 2, 4, 2]
            // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,   10, 11, 12, 13, 14]            

            if (currRightAnswer === student.answer[nLoop % student.answer.length])
                student.rightAnsCnt++        
        }                
        nLoop++;
    }
    
    let max = Object.entries(students).reduce(
        (prev, curr) => 
            (prev = prev < curr[1].rightAnsCnt ? curr[1].rightAnsCnt : prev),
        0);

    for (let i = 0; i < Object.entries(students).length; i++) {
        if (max === students[i+1].rightAnsCnt)
            result.push(i+1)
    }
    return result.sort((a, b) => (a - b));
}


// --실행용--
solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);
solution([1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1, 3, 2, 4, 2]);
// ----


// ------------------------------------------------------------

/*
// 2차시, 통과 성공 (프로그래머스에 올라감)
function solution(answers) {    
    const result = [];
    const students = {
        1: {
            answer: [1, 2, 3, 4, 5],
            rightAnsCnt: 0,
        },
        2: {
            answer: [2, 1, 2, 3, 2, 4, 2, 5],
            rightAnsCnt: 0,
        },
        3: {
            answer: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
            rightAnsCnt: 0,
        },
    };

    let nLoop = 0;

    while (answers.length > nLoop) {
        let currRightAnswer = answers[nLoop];

        for (const key in students) {
            const student = students[key];
            // [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
            // [1, 3, 2, 4, 2, 1, 3, 2, 4, 2,   1, 3, 2, 4, 2]
            // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,   10, 11, 12, 13, 14]            

            if (currRightAnswer === student.answer[nLoop % student.answer.length])
                student.rightAnsCnt++        
        }                
        nLoop++;
    }
    
    let max = Math.max(students[1].rightAnsCnt, students[2].rightAnsCnt, students[3].rightAnsCnt);

    for (let i = 0; i < 3; i++) {
        if (max === students[i+1].rightAnsCnt)
            result.push(i+1)
    }
    return result;
}
*/

/* 
// 1차시. 통과 실패.
function solution(answers) {    
    const result = [];
    const students = {
        1: {
            answer: [1, 2, 3, 4, 5],
            rightAnsCnt: 0,
        },
        2: {
            answer: [2, 1, 2, 3, 2, 4, 2, 5],
            rightAnsCnt: 0,
        },
        3: {
            answer: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
            rightAnsCnt: 0,
        },
    };

    let nLoop = 0;

    while (answers.length > nLoop) {
        let currRightAnswer = answers[nLoop];

        for (const key in students) {
            const student = students[key];
            // [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
            // [1, 3, 2, 4, 2, 1, 3, 2, 4, 2,   1, 3, 2, 4, 2]
            // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,   10, 11, 12, 13, 14]            

            if (currRightAnswer === student.answer[nLoop % student.answer.length])
                student.rightAnsCnt++        
        }                
        nLoop++;
    }

// 이부분이 문젠데.. 이게 왜 틀리지
    for (const key in students) {
        const student = students[key];
        if (student.rightAnsCnt > 0) 
            result.push(+key);
    }
    
    return result.sort((a,b) => a - b);
// ---
}
*/