// ME
function solution(arr) {
  if (arr.length <= 0) return 'NO';

  const checks = new Map(Array.from({ length: arr.length }, (_, idx) => [arr[idx], false]));
  const arrSubsets = [];

  function DFS(idx) {
    if (arrSubsets.length > 0) return;
    if (idx === arr.length) {
      const trues = [...checks.keys()].reduce((result, key) => {
        const value = checks.get(key);
        value && result.push(key);
        return result;
      }, []);
      const falses = arr.filter((v) => !trues.includes(v));

      const truesSum = trues.reduce((sum, v) => ((sum += v), sum), 0);
      const faslesSum = falses.reduce((sum, v) => ((sum += v), sum), 0);
      const isSameSum = truesSum === faslesSum;
      return isSameSum && arrSubsets.push({ trues, falses });
    }

    checks.set(arr[idx], false);
    DFS(idx + 1);
    checks.set(arr[idx], true);
    DFS(idx + 1);
  }
  DFS(0);
  return arrSubsets.length > 0 ? 'YES' : 'NO';
}

const arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

// ANSWER
function solution(arr){
    let answer="NO", flag=0;
    let total=arr.reduce((a, b)=>a+b, 0);
    let n=arr.length;
    function DFS(L, sum){
        if(flag) return;
        if(L===n){
            if((total-sum)===sum){
                answer="YES";
                flag=1;
            }
        }
        else{
            DFS(L+1, sum+arr[L]);
            DFS(L+1, sum);
        }
    }
    DFS(0, 0);
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));

// -- BAK ---------------------------------------------------------------------------
// ME (1차시, 실패.. 부분집합을 전부 구해버림)
/*
function solution(arr) {
  if (arr.length <= 0) return 'NO';

  let result = false;
  const checks = new Map(Array.from({ length: arr.length }, (_, idx) => [arr[idx], false]));
  const arrSubsets = [];

  function DFS(idx) {
    if (idx === arr.length) {
      const curr = [...checks.keys()].reduce((result, key) => {
        const value = checks.get(key);
        value && result.push(key);
        return result;
      }, []);
      return arrSubsets.push(curr);
    }

    checks.set(arr[idx], false);
    DFS(idx + 1);
    checks.set(arr[idx], true);
    DFS(idx + 1);
  }
  DFS(0);
  return result ? 'YES' : 'NO';
}

const arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
*/
