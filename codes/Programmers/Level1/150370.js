// https://school.programmers.co.kr/learn/courses/30/lessons/150370
// 개인정보 수집 유효기간
function solution(today, terms, privacies) {
  const createExpirationDate = (dateText, addedMonth) => {
    const [year, month, day] = dateText.split('.').map((v) => +v);
    let [newYear, newMonth, newDay] = [year, month + addedMonth, day];

    // [주의!!] term(추가될 달)의 최대는 12가 아님!! 더 될 수 있음!!
    if (newMonth > 12) {
      newYear += Math.floor(newMonth / 12);
      newMonth = newMonth % 12;
    }
    // --

    if (newDay === 1) {
      newMonth--;
      newDay = 28;
    } else if (newDay > 1) {
      newDay--;
    }
    if (newMonth === 0) {
      newYear--;
      newMonth = 12;
    }
    return new Date([newYear, newMonth, newDay].join('.'));
  };

  const todayDate = new Date(today);
  const termsMap = new Map(terms.map((t) => t.split(' ').map((v) => (Number.isNaN(+v) ? v : +v))));
  const expirationDates = [];
  privacies.forEach((v) => {
    const [dateText, termKey] = v.split(' ');
    const expirationDate = createExpirationDate(dateText, termsMap.get(termKey));
    expirationDates.push(expirationDate);
  });

  return expirationDates.reduce((result, exDate, idx) => {
    if (exDate.valueOf() < todayDate.valueOf()) {
      result.push(idx + 1);
    }
    return result;
  }, []);
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('2022.05.19', ['A 6', 'B 12', 'C 3'], ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']), // [1, 3]
  solution(
    '2020.01.01',
    ['Z 3', 'D 5'],
    ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'],
  ), // [1, 4, 5]
  solution('2022.02.28', ['A 24'], ['2020.01.28 A']), // [1],
);

// 1차시, 통과 실패
/*
function solution(today, terms, privacies) {
  const createExpirationDate = (dateText, addedMonth) => {
    const [year, month, day] = dateText.split('.').map((v) => +v);
    let [newYear, newMonth, newDay] = [year, month + addedMonth, day];
    if (newMonth > 12) {
      newYear++;
      newMonth -= 12;
    }
    if (newDay === 1) {
      newMonth--;
      newDay = 28;
    } else if (newDay > 1) {
      newDay--;
    }
    if (newMonth === 0) {
      newYear--;
      newMonth = 12;
    }
    return new Date([newYear, newMonth, newDay].join('.'));
  };

  const todayDate = new Date(today);
  const termsMap = new Map(terms.map((t) => t.split(' ').map((v) => (Number.isNaN(+v) ? v : +v))));
  const expirationDates = [];
  privacies.forEach((v) => {
    const [dateText, termKey] = v.split(' ');
    const expirationDate = createExpirationDate(dateText, termsMap.get(termKey));
    expirationDates.push(expirationDate);
  });

  return expirationDates.reduce((result, exDate, idx) => {
    if (exDate.valueOf() < todayDate.valueOf()) {
      result.push(idx + 1);
    }
    return result;
  }, []);
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('2022.05.19', ['A 6', 'B 12', 'C 3'], ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']), // [1, 3]
  solution(
    '2020.01.01',
    ['Z 3', 'D 5'],
    ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'],
  ), // [1, 4, 5]
);
*/
