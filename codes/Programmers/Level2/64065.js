// https://programmers.co.kr/learn/courses/30/lessons/64065
// 2019 카카오 개발자 겨울 인턴십 : 튜플

const solution = (s) =>
  [
    ...s
      .replace(/\{|\}/g, '')
      .split(',')
      .reduce((map, curr) => (map.has(curr) ? map.set(curr, map.get(curr) + 1) : map.set(curr, 1)), new Map()),
  ]
    .sort((a, b) => b[1] - a[1])
    .map((v) => +v[0]);

console.log(
  solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'), // [2, 1, 3, 4]
  solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'), // [2, 1, 3, 4]
  solution('{{20,111},{111}}'), // [111, 20]
  solution('{{123}}'), // [123]
  solution('{{4,2,3},{3},{2,3,4,1},{2,3}}'), // [3, 2, 4, 1]
);
