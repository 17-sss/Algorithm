// ME (3차시 / 다른 방법)
const createSum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
function solution(m, product) {
  product.sort((a, b) => createSum(a) - createSum(b));
  let result = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < product.length; i++) {
    let cnt = 0;
    let currMoney = 0;
    for (let j = 0; j < product.length; j++) {
      let price = product[j][0];
      const deliveryFee = product[j][1];
      if (i === j) price = Math.floor(price / 2);
      const currTotal = price + deliveryFee;
      if (m >= (currMoney + currTotal)) {
        currMoney += currTotal;
        cnt++;
      }
    }
    result = Math.max(result, cnt);
  }
  return result;
}

const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

// ME (2차시 / 성공) (md 파일에 기재)
/* 
const createSum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
function solution(m, product) {
  let result = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < product.length; i++) {
    const arrSumItem = [];

    const arr1 = [...product[i]];
    arr1[0] = Math.floor(arr1[0] / 2);
    arrSumItem.push(createSum(arr1));

    for (let j = 0; j < product.length; j++) {
      if (i === j) continue;
      const arr2 = product[j];
      arrSumItem.push(createSum(arr2));
    }
    const length = arrSumItem.sort((a, b) => a - b).reduce((result, v) => {
      if (createSum(result) + v <= m) result.push(v);
      return result;
    }, []).length;
    length > result && (result = length);
  }
  return result;
}
const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
*/

// ME (1차시 / 성공 : 너무 김)
/* 
const createSum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
function solution(m, product) {
  const arrSums = [];

  for (let i = 0; i < product.length; i++) {
    const arrSumItem = [];

    const arr1 = [...product[i]];
    arr1[0] = Math.floor(arr1[0] / 2);
    arrSumItem.push(createSum(arr1));

    for (let j = 0; j < product.length; j++) {
      if (i === j) continue;
      const arr2 = product[j];
      arrSumItem.push(createSum(arr2));
    }
    arrSums.push(arrSumItem.sort((a, b) => a - b));
  }

  let result = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arrSums.length; i++) {
    const arrSum = arrSums[i];
    const length = arrSum.reduce((result, v) => {
      if (m >= createSum(result) + v) result.push(v);
      return result;
    }, []).length;
    if (result < length) result = length;
  }

  return result;
}

const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
 */

// ====================================================================

// ANSWER
/* 
function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
*/
