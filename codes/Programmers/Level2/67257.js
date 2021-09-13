// https://programmers.co.kr/learn/courses/30/lessons/67257
// [카카오 인턴] 수식 최대화

// (2021.09.13) ---------------------

// 1차시, 통과성공 (참고 안함)
const calc = (oper, num1, num2) => {
  switch (oper) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: return 0;
  }
};

const checkNum = (strings, idx) => {
  if (idx < 0 || strings.length - 1 < idx) return null;
  return /\-?\d+/g.test(strings[idx]) ? +strings[idx] : null;
};

function solution(expression) {
  const exps = expression.match(/\d+|[\*\-\+]/g);
  if (!exps) return null;
  const cases = [
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['-', '+', '*'],
    ['-', '+', '*'],
  ];

  let nMaxResult = Number.MIN_SAFE_INTEGER;
  cases.forEach((arrCase) => {
    const copyExps = [...exps];
    arrCase.forEach((oper) => {
      while (copyExps.indexOf(oper) > -1) {
        const currOperIdx = copyExps.indexOf(oper);
        const num1Idx = currOperIdx - 1;
        const num2Idx = currOperIdx + 1;

        const num1 = checkNum(copyExps, num1Idx);
        const num2 = checkNum(copyExps, num2Idx);

        copyExps[num1Idx < 0 ? 0 : num1Idx] = calc(oper, num1, num2);
        num1Idx < 0 ? copyExps.splice(num2Idx, 1) : copyExps.splice(currOperIdx, 2);
      }
    });
    nMaxResult = Math.max(nMaxResult, Math.abs(copyExps[0]));
  });

  return nMaxResult;
}

console.log(
  solution('100-200*300-500+20'), // 60420
  solution('50*6-3*2'), // 300
  solution('-10-20'), // 30
);

// (2021.05.06) ---------------------

// 1차시, 통과 성공 (오래걸림 / 약간 참고함 / 이해 더 필요)
// 참고 링크: https://kyun2da.github.io/2020/07/12/maximumEquation/
/* 
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
 */
