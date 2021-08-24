// ME
function solution(m, ps, pt) {
  const qArr = ps.map((v, idx) => [v, pt[idx]]);
  const result = [];

  function DFS(currScore, runTime, L) {
    if (qArr.length === L) return runTime <= m && result.push(currScore);

    const [score, time] = qArr[L];
    DFS(currScore, runTime, L + 1);
    DFS(currScore + score, runTime + time, L + 1);
  }
  DFS(0, 0, 0);

  return Math.max(...result);
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));  // 41

// ANSWER
