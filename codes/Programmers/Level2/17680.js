// https://programmers.co.kr/learn/courses/30/lessons/17680
// [1차] 캐시
// * LRU 알고리즘: 가장 오랫동안 참조되지 않은 페이지를 교체하는 기법

// (2021.12.14) ---------------------
function solution(cacheSize, cities) {
  let result = 0;
  const cacheMap = new Map();

  cities.forEach((v) => {
    if (!cacheSize) return (result += 5);

    v = v.toUpperCase();
    const isHas = cacheMap.has(v);
    if (isHas) {
      cacheMap.set(v, cacheMap.get(v) + 1);
      result += 1;
    } else {
      const isMaxSize = cacheMap.size === cacheSize;
      if (isMaxSize) {
        const arrCaches = [...cacheMap.entries()].sort((a, b) => a - b);
        const lastItem = arrCaches[0] || null;
        lastItem && cacheMap.delete(lastItem[0]);
      }
      cacheMap.set(v, 1);
      result += 5;
    }
  });

  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']), // 50
  solution(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']), // 21
  solution(2, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ]), // 60
  solution(5, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'SanFrancisco',
    'Seoul',
    'Rome',
    'Paris',
    'Jeju',
    'NewYork',
    'Rome',
  ]), // 52
  solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']), //25
  solution(2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']), // 16
  solution(0, ['LA', 'LA']), // 10
  solution(5, ['Pangyo', 'Pangyo', 'Pangyo']), // 7
);
