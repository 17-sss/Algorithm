// https://programmers.co.kr/learn/courses/30/lessons/77484
// 2022 KAKAO BLIND RECRUITMENT : 신고 결과 받기

// 1차시, 통과 성공

function solution(id_list, report, k) {
  const banCntMap = new Map(id_list.map((v) => [v, 0]));
  const reqCntMap = new Map(id_list.map((v) => [v, new Set()]));

  report.forEach((rep) => {
    const [reqUser, target] = rep.split(' ');
    const currReqSet = reqCntMap.get(reqUser);
    if (!currReqSet || currReqSet.has(target)) return;
    banCntMap.set(target, banCntMap.get(target) + 1);
    reqCntMap.set(reqUser, reqCntMap.get(reqUser).add(target));
  });
  const result = [...reqCntMap.values()].reduce((result, aSet) => {
    const value = [...aSet].reduce((result, name) => result + Number(banCntMap.get(name) >= k), 0);
    result.push(value);
    return result;
  }, []);
  return result;
}

const pipeLog = (...funcs) => console.log(funcs);
pipeLog(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2,
  ), // [2, 1, 1, 0]
  solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3), // [0, 0]
);
