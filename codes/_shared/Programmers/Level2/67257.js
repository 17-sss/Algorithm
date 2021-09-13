// https://programmers.co.kr/learn/courses/30/lessons/67257
// [카카오 인턴] 수식 최대화

// (2021.09.13) ---------------------

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
  // 정규표현식 활용, 숫자와 연산자 분리
  const exps = expression.match(/\d+|[\*\-\+]/g);
  if (!exps) return null;

  // 연산 규칙 (3!)
  const cases = [ ['+', '*', '-'], ['+', '-', '*'], ['*', '+', '-'], ['*', '-', '+'], ['-', '+', '*'], ['-', '+', '*'] ];

  let nMaxResult = Number.MIN_SAFE_INTEGER;

  cases.forEach((arrCase) => {
    // 숫자와 연산자가 들어있는 배열(exps)을 복사
    const copyExps = [...exps];

    // cases의 요소(배열, arrCases)안에 있는 연산자 순서대로 계산
    arrCase.forEach((oper) => {
      while (copyExps.indexOf(oper) > -1) {
        const currOperIdx = copyExps.indexOf(oper); //  연산자 위치
        const num1Idx = currOperIdx - 1;  // 첫번째 숫자 위치
        const num2Idx = currOperIdx + 1;  // 두번째 숫자 위치

        // 숫자인지 확인
        const num1 = checkNum(copyExps, num1Idx);
        const num2 = checkNum(copyExps, num2Idx);


        /* 참고 (아래 2줄은..) 
          만약 num1Idx가 음수라면 0번째에 있는건 연산자임. 삼항연산자 활용하여 처리) -> 만약 expression이 "-10-20"으로 들어온다면..? 
        */
        // 계산하여 copyExps의 숫자1의 위치에 계산된 값 대입. 숫자1의 위치가 음수라면 0번째 위치에 대입
        copyExps[num1Idx < 0 ? 0 : num1Idx] = calc(oper, num1, num2);

        // 숫자1의 위치가 음수라면 숫자2(num2)의 위치에 있는 값만 splice
        // 숫자1의 위치가 정상적이라면 연산자가 있는 위치부터 다음값(num2)이 있는 위치까지 splice
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

