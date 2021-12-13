// https://programmers.co.kr/learn/courses/30/lessons/42862
// 체육복

// (2021.12.14) ---------------------
function solution(n, lost, reserve) {
  // 테스트케이스 13, 14 추가됨. 정렬안하면 풀 수 없음
  const tmpReserve = reserve.filter((v) => !lost.includes(v)).sort();
  const tmpLost = lost.filter((v) => !reserve.includes(v)).sort();
  reserve = tmpReserve;
  lost = tmpLost;

  let result = n - lost.length;
  for (let i = 0; i < lost.length; i++) {
    const curr = lost[i];
    const prev = curr - 1;
    const next = curr + 1;

    if (reserve.includes(prev) || reserve.includes(next)) {
      if (reserve.includes(prev)) reserve = reserve.filter((v) => v !== prev);
      else if (reserve.includes(next)) reserve = reserve.filter((v) => v !== next);
      result++;
    }
  }

  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution(5, [2, 4], [1, 3, 5]), // 5
  solution(5, [2, 4], [3]), // 4
  solution(3, [3], [1]), // 2
  solution(3, [1, 2], [2, 3]), // 2
);

// (2021.04.28) ---------------------
/*
// 2차시, 통과 성공
function solution(n, lost, reserve) {
  let result = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    const currLost = lost[i];
    if (reserve.indexOf(currLost) > -1) {
      reserve = reserve.filter((_, idx) => reserve.indexOf(currLost) !== idx);
      lost = lost.filter((_, idx) => i !== idx);
      result++;
      i--;
    }
  }

  for (let i = 0; i < lost.length; i++) {
    const lostStudent = lost[i];
    const arrRange = [lostStudent - 1, lostStudent + 1];

    for (let j = 0; j < arrRange.length; j++) {
      const nReserveOK = reserve.indexOf(arrRange[j]);
      if (nReserveOK > -1) {
        reserve = reserve.filter((_, idx) => idx !== nReserveOK);
        result++;
        break;
      }
    }
  }

  return result;
}

solution(5, [2, 4], [1, 3, 5]); // 5
solution(5, [2, 4], [3]); // 4
solution(3, [3], 1); // 2
solution(3, [1, 2], [2, 3]); // 2
*/

/*
// 1차시, 통과 실패
function solution(n, lost, reserve) {
    reserve = reserve.filter((v) => lost.indexOf(v) < 0);
    lost = lost.filter((v) => reserve.indexOf(v) < 0);
    const arrAll = [...Array(n)]
        .map((_, i) => i+1)
        .filter((v) => lost.indexOf(v) < 0 );

    let result = arrAll.length;

    for (let i = 0; i < lost.length; i++) {
        const lostStudent = lost[i];
        const arrRange = [lostStudent - 1, lostStudent + 1];

        for (let j = 0; j < arrRange.length; j++) {
            const nReserveOK = reserve.indexOf(arrRange[j]);
            if (nReserveOK > -1) {
                reserve = reserve.filter((_, idx) => idx !== nReserveOK);
                result++;
                break;
            }
        }
    }

    return result;
}
*/

// ---------------

// (2021.02.09) ---------------------
// 3차시, 통과 성공 (약간 이해 못함)
/*
function solution(n, lost, reserve) {
    let answer = 0;
    let tmp = n - lost.length;

    for (let i = 0; i < lost.length; i++) {
        if (reserve.indexOf(lost[i]) !== -1) {
            reserve.splice(reserve.indexOf(lost[i]), 1);
            lost.splice(i, 1);
            tmp++;
            i--;
        }
    }

    const arrPossibleRange = reserve.map((v) => [v - 1, v, v + 1]);

    lost.forEach((lostStudent, i) => {
        const possibleIdx = arrPossibleRange.findIndex(
            (vArr) => vArr.indexOf(lostStudent) > -1,
        );
        if (possibleIdx > -1 && arrPossibleRange[possibleIdx]) {
            if (reserve.findIndex((v) => v === lostStudent) > -1) return;

            console.log(lostStudent, arrPossibleRange[possibleIdx]);
            arrPossibleRange.splice(possibleIdx, 1);
            tmp++;
        }
    });
    answer = tmp;
    return answer;
}
*/

/*
// 2차시, 통과 실패
function solution(n, lost, reserve) {
    let answer = (n - lost.length);

    for(let i = 0; i < reserve.length; i++)  {
        if (lost.indexOf(reserve[i]) > -1) {
            reserve.splice(i, 1);
            lost.splice(lost.indexOf(reserve[i]), 1);
            break;
        }                 
    }
    
    const arrPossibleRange = reserve.map((v) => [v-1, v, v+1]);
    
    lost.forEach((lostStudent, i) => {
        const possibleIdx = arrPossibleRange.findIndex((vArr) => vArr.indexOf(lostStudent) > -1 );         
        if (possibleIdx > -1 && arrPossibleRange[possibleIdx]) {
            arrPossibleRange.splice(possibleIdx, 1);
            answer++;        
        }
    });
    
    return answer;
}
*/

/*
// 1차시, 통과 실패.
function solution(n, lost, reserve) {
    let answer = (n - lost.length);

    const arrPossibleRange = reserve.map((v) => [v-1, v, v+1]);
    
    lost.forEach((lostStudent, i) => {
        const possibleIdx = arrPossibleRange.findIndex((vArr) => vArr.indexOf(lostStudent) > -1 );         
        if (possibleIdx > -1 && arrPossibleRange[possibleIdx]) {
            arrPossibleRange.splice(possibleIdx, 1);
            answer++;        
        }
    });
    
    return answer;
}
*/
