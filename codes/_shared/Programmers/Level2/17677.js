// https://programmers.co.kr/learn/courses/30/lessons/17677
// 2018 KAKAO BLIND RECRUITMENT : [1차] 뉴스 클러스터링

// (2021.09.16) ---------------------

const createZipHap = (aStr) => {
  const result = [];
  let nLoc = 0;
  const str = aStr.toUpperCase();
  while (nLoc + 2 <= str.length) {
    const strSlice = str.slice(nLoc, nLoc + 2);
    /[A-Z]{2}/.test(strSlice) && result.push(strSlice);
    nLoc++;
  }
  return result;
};

const getUnionIntersectCnt = (arr1, arr2) => {
  const result = { union: 0, intersect: 0 };
  arr1.forEach((value) => {
    if (arr2.includes(value)) {
      arr2.splice(arr2.indexOf(value), 1);
      result.intersect++;
    }
    result.union++;
  });
  arr2.forEach((_) => result.union++);
  return result;
};

function solution(str1, str2) {
  const arrStr1 = createZipHap(str1);
  const arrStr2 = createZipHap(str2);
  const { union, intersect } = getUnionIntersectCnt(arrStr1, arrStr2);
  const MAX_16BIT = 2 ** 16;
  return union === 0 ? MAX_16BIT : Math.floor((intersect / union) * MAX_16BIT);
}

console.log(
  solution('FRANCE', 'french'), // 16384
  solution('handshake', 'shake hands'), // 65536
  solution('aa1+aa2', 'AAAA12'), // 43690
  solution('E=M*C^2', 'e=m*c^2'), // 65536
);
