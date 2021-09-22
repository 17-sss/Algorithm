// https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
// Lesson 5 : MinAvgTwoSlice

// (2021.09.21) ---------------------

// 2차시, 참고
/*
  1. https://lipcoder.tistory.com/entry/MinAvgTwoSlice-Codility (풀이)
    - 평균값은 항상 평균값을 계산할 숫자중에 가장 작은 값보다 크거나 같다
    - 3개일 경우 예외가 있기 때문에 이 경우도 평균 값을 구해줘야 함
      - ex) [2, 6, 1]
        (2, 6) => (2 + 6) / 2 => 4
        (6, 1) => (6 + 1) / 2 => 3.5

        (4, 3.5) => (4 + 3.5) / 2 = 3.75
        (2, 6, 1) => (2 + 6 + 1) / 3 = 3
        - 이와 같이 부분 평균값의 평균이 전체 범위의 평균값과 서로 다른 것을 볼 수 있음.
          그렇기에 3개 범위일때에도 평균값을 계산해줘야 함.

  2. https://pkiop.tistory.com/219 (자바스크립트 답안)
  3. ME
    - 계산해야 할 숫자 범위가 넓어질수록 평균도 높아질 것.. 최소한의 구간으로 계산해야 함
*/

function solution(A) {
  let result = {
    avg: (A[1] + A[0]) / 2,
    startIdx: 0,
  };
  for (let i = 2; i < A.length; i++) {
    const avg1 = (A[i] + A[i - 1] + A[i - 2]) / 3;
    if (avg1 < result.avg) {
      result.avg = avg1;
      result.startIdx = i - 2;
    }

    const avg2 = (A[i] + A[i - 1]) / 2;
    if (avg2 < result.avg) {
      result.avg = avg2;
      result.startIdx = i - 1;
    }
  }

  return result.startIdx;
}
console.log(solution([4, 2, 2, 5, 1, 5, 8]));

// 1차시, 뻔한 시간초과 ( 시간복잡도 O(N ** 3) )
/* 
function solution(A) {
  const result = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const slice1 = A.slice(i, j);
      const slice2 = A.slice(j, A.length);
      const sliceInfo1 = {
        idxs: { start: i, end: j },
        avg: slice1.reduce((prev, curr) => prev + curr) / slice1.length,
      };
      const sliceInfo2 = {
        idxs: { start: j, end: A.length },
        avg: slice2.reduce((prev, curr) => prev + curr) / slice2.length,
      };

      slice1.length > 1 && result.push(sliceInfo1)
      slice2.length > 1 && result.push(sliceInfo2)
    }
  }
  return result.sort((a, b) => a.avg - b.avg)[0].idxs.start;
}
*/
