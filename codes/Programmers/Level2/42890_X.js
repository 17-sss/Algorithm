// https://programmers.co.kr/learn/courses/30/lessons/42890
// 2019 KAKAO BLIND RECRUITMENT : 후보키
/* 
  최소성..? 유일성..?
  - https://ksbsite.tistory.com/11
*/

// (2021.09.10) ---------------------

// 유일성: 겹치지 않는 어떤 컬럼의 값들
// 최소성: 몇 개의 컬럼을 조합해서 유일하게 그 레코드(데이터)를 알아낼수 있을 때, 최소한의 컬럼만을 사용하는?

// 4차시.. 보류..

console.log(
  solution([
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2'],
  ]), // 2
  solution([
    ['a', 1, 'aaa', 'c', 'ng'],
    ['b', 1, 'bbb', 'c', 'g'],
    ['c', 1, 'aaa', 'd', 'ng'],
    ['d', 2, 'bbb', 'd', 'ng'],
  ]), // 3
  solution([
    ['a', 1, 4],
    [2, 1, 5],
    ['a', 2, 4],
  ]), // 2
  solution([
    ['a', 'b', 'c'],
    [1, 'b', 'c'],
    ['a', 'b', 4],
    ['a', 5, 'c'],
  ]), // 1
  solution([
    ['a', 'aa'],
    ['aa', 'a'],
    ['a', 'a'],
  ]), // 0 ?
);

// 3차시, 통과 실패 (39.3)
/* 
const createRecord = (...datas) => {
  const rec = {};
  datas.forEach((v, idx) => (rec[idx] = v));
  return rec;
};

const createInitCandidateKeys = (recordKeys, records) =>
  recordKeys.filter((key) => isCandidateKey(records.map((rec) => rec[key])));

const isCandidateKey = (recordValues) => {
  if (recordValues.length > 1) {
    const arrTmp = [];
    for (let i = 0; i < recordValues.length; i++) {
      const value = recordValues[i];
      if (arrTmp.includes(value)) return false;
      else arrTmp.push(value);
    }
  } else return false;
  return true;
};

const isMinimalityKey = (currKey, candidateKeys) => {
  if (candidateKeys.length <= 0) return false;
  if (candidateKeys.length < 1) return true;
  const arrCandidateKeys = candidateKeys.map((candidateKey) => candidateKey.split(''));
  const arrCurrKey = currKey.split('');

  for (let i = 0; i < arrCandidateKeys.length; i++) {
    const arrCandidateKey = arrCandidateKeys[i];
    const keyCnt = arrCandidateKey.filter((v) => arrCurrKey.includes(v)).length;
    if (keyCnt > 1) return false;
  }
  return true;
};

function solution(relation) {
  const records = relation.map((rel) => createRecord(...rel));
  if (records.length <= 0) return 0;
  const initRecordKeys = Object.keys(records[0]);

  // [1-1] 초기 후보키
  const candidateKeys = createInitCandidateKeys(initRecordKeys, records);

  // [1-2] 후보키가 아닌 키들
  const notCandidateKeys = initRecordKeys.filter((key) => !candidateKeys.includes(key));

  // [2] DFS (조합 -> 후보키에 적합하면 candidateKeys에 push)
  const checks = [];
  const DFS = (L, values, currKey) => {
    if (values.length > 1 && !checks.includes(currKey)) {
      checks.push(currKey);
      const tmpValues = Array.from({ length: records.length }, () => '');
      for (let i = 0; i < values.length; i++) {
        const arrValue = values[i];
        arrValue.forEach((v, idx) => (tmpValues[idx] += v));
      }
      if (isCandidateKey(tmpValues)) return isMinimalityKey(currKey, candidateKeys) && candidateKeys.push(currKey);
    }

    if (notCandidateKeys.length === L) return;
    const notCandidateKey = notCandidateKeys[L];
    const nextValues = values.slice();
    nextValues.push(records.map((rec) => rec[notCandidateKey]));

    DFS(L + 1, values, currKey);
    DFS(L + 1, nextValues, currKey + notCandidateKey);
  };
  notCandidateKeys.length > 0 && DFS(0, [], '');

  return candidateKeys.length;
}
*/

// 2차시, 통과 실패 (64.3)
/* 
const createRecord = (...datas) => {
  const rec = {};
  datas.forEach((v, idx) => (rec[idx] = v));
  return rec;
};

const createInitCandidateKeys = (recordKeys, records) =>
  recordKeys.filter((key) => isCandidateKey(records.map((rec) => rec[key])));

const isCandidateKey = (recordValues) => {
  if (recordValues.length > 1) {
    const arrTmp = [];
    for (let i = 0; i < recordValues.length; i++) {
      const value = recordValues[i];
      if (arrTmp.includes(value)) return false;
      else arrTmp.push(value);
    }
  } else return false;
  return true;
};

function solution(relation) {
  const records = relation.map((rel) => createRecord(...rel));
  if (records.length <= 0) return 0;
  const initRecordKeys = Object.keys(records[0]);

  // [1-1] 초기 후보키
  const candidateKeys = createInitCandidateKeys(initRecordKeys, records);

  // [1-2] 후보키가 아닌 키들
  const notCandidateKeys = initRecordKeys.filter((key) => !candidateKeys.includes(key));

  // [2] DFS (조합 -> 후보키에 적합하면 candidateKeys에 push)
  const checks = [];
  const DFS = (L, values, currKey) => {
    if (values.length > 1 && !checks.includes(currKey)) {
      checks.push(currKey);
      const tmpValues = Array.from({ length: records.length }, () => '');
      for (let i = 0; i < values.length; i++) {
        const arrValue = values[i];
        arrValue.forEach((v, idx) => (tmpValues[idx] += v));
      }
      if (isCandidateKey(tmpValues)) return candidateKeys.push(currKey);
    }

    if (notCandidateKeys.length === L) return;
    const notCandidateKey = notCandidateKeys[L];
    const nextValues = values.slice();
    nextValues.push(records.map((rec) => rec[notCandidateKey]));

    DFS(L + 1, values, currKey);
    DFS(L + 1, nextValues, currKey + notCandidateKey);
  };
  notCandidateKeys.length > 0 && DFS(0, [], '');

  return candidateKeys.length;
}
*/

// (2021.09.09) ---------------------

// 1차시, 뭐냐 이게..
/* 
function solution(relation) {
  const arrCombi = [];
  function combi(currStr, idx, arr) {
    if (arr.length <= idx) return arrCombi.push(currStr);
    combi(currStr + arr[idx], idx + 1, arr);
    combi(currStr + '', idx + 1, arr);
  }

  const candidatesIdx = [];
  for (let col = 0; col < relation[0].length; col++) {
    const arrDup = [];
    for (let row = 0; row < relation.length; row++) {
        const data = relation[row][col];
        if (arrDup.includes(data)) {
            candidatesIdx.push(col);
            break;
        }
        arrDup.push(data);
    }
  }
  console.log(candidatesIdx)

  return;

  for (let idx = 0; idx < relation.length; idx++) {
    const r = relation[idx];
    combi('', 0, r);
  }

  console.log(arrCombi);
}


*/
