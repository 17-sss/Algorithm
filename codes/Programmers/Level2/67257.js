// https://programmers.co.kr/learn/courses/30/lessons/67257
// [카카오 인턴] 수식 최대화

// (2021.05.06) ---------------------

// 1차시, 통과 성공 (오래걸림 / 약간 참고함 / 이해 더 필요)
// 참고 링크: https://kyun2da.github.io/2020/07/12/maximumEquation/

// const createFactorial = (n) => [...Array( (n > 0) ? n : 1)].reduce((init, _, idx) =>  (idx + 1) * init, 1);
const minus = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const plus = (num1, num2) => num1 + num2;

const solution = (expression) => {
    const answers = [];

    const allCases = [
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['*', '+', '-'],
        ['*', '-', '+'],
        ['-', '+', '*'],
        ['-', '+', '*'],
    ];

    const numbers = expression.split(/[^\d]/).map((v) => +v);
    const opers = expression.split(/\d+/g).filter((v) => v);

    while (allCases.length > 0) {
        const currCases = allCases.shift(); // 현재 case는 참고만하는 것. pop하거나 그럼안대!

        const tmpOpers = [...opers];
        const tmpNumbers = [...numbers];
        while (currCases.length !== 0) {
            const currCase = currCases.shift();

            while (tmpOpers.indexOf(currCase) > -1) {
                const idx = tmpOpers.indexOf(currCase);
                tmpOpers.splice(idx, 1);
                if (currCase === '+') {
                    tmpNumbers[idx] = plus(
                        tmpNumbers[idx],
                        tmpNumbers[idx + 1],
                    );
                    tmpNumbers.splice(idx + 1, 1);
                } else if (currCase === '-') {
                    tmpNumbers[idx] = minus(
                        tmpNumbers[idx],
                        tmpNumbers[idx + 1],
                    );
                    tmpNumbers.splice(idx + 1, 1);
                } else {
                    tmpNumbers[idx] = multiply(
                        tmpNumbers[idx],
                        tmpNumbers[idx + 1],
                    );
                    tmpNumbers.splice(idx + 1, 1);
                }
            }
        }
        answers.push(Math.abs(tmpNumbers[0]));
    }

    return Math.max.apply(null, answers);
};
