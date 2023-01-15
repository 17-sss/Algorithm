// ME
function solution(arr) {
  const createSumMap = (arr) => {
    const map = new Map(arr.map((v) => [v, 0]));
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      let sum = 0;
      while (value > 0) {
        sum += value % 10;
        value = Math.floor(value / 10);
      }
      map.set(arr[i], sum);
    }
    return map;
  };

  const sumEntries = Array.from(createSumMap(arr).entries());
  const sortValues = [...sumEntries]
    .sort(([aValue, aSum], [bValue, bSum]) => {
      if (aSum === bSum) return bValue - aValue;
      return bSum - aSum;
    })
    .map(([value]) => value);

  return sortValues[0];
}

const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr)); // 137
