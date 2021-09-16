// https://programmers.co.kr/learn/courses/30/lessons/17677
// 2018 KAKAO BLIND RECRUITMENT : [1차] 뉴스 클러스터링

// (2021.09.16) ---------------------

// 2차시, 통과했지만.. 왜?
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

// 이 부분 이해하도록 하기! 
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

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('FRANCE', 'french'), // 16384
  solution('handshake', 'shake hands'), // 65536
  solution('aa1+aa2', 'AAAA12'), // 43690
  solution('E=M*C^2', 'e=m*c^2'), // 65536
  solution('aa', 'aaa'),
  solution('abccc', 'ccdefgg'),
);


// 1차시, 또 실패
/* 
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

// const createIntersect = (arr1, arr2) => arr1.filter((v) => arr2.includes(v)); (이거 사용할떄가 점수 더 높음)
const createIntersect = (arr1, arr2) => {
  const result = [];
  const first = arr1.length > arr2.length ? arr1 : arr2;
  const second = arr1.length > arr2.length ? arr2 : arr1;
  for (let i = 0; i < first.length; i++) {
    const item = first[i];
    second.includes(item) && result.push(item);
  }
  return result;
}
const createUnion = (arr1, arr2) => [...arr1, ...arr2];
const getIntersectUnionCnt = (arr1, arr2) => {
  const arrUnion = createUnion(arr1, arr2);
  const arrIntersect = createIntersect(arr1, arr2);
  const intersect = arrIntersect.length;
  return { union: arrUnion.length - intersect, intersect} ;
};

function solution(str1, str2) {
  const arrStr1 = createZipHap(str1);
  const arrStr2 = createZipHap(str2);
  const { union, intersect } = getIntersectUnionCnt(arrStr1, arrStr2);
  const MAX_16BIT = 2 ** 16;
  return union === 0 ? MAX_16BIT : Math.floor(intersect / union * MAX_16BIT);
}
*/


// (2021.09.09) ---------------------

// 4차시, 참고 (https://velog.io/@kimtaeeeny/프로그래머스-뉴스-클러스터링-javascript-2018-카카오공채)
/* 
function solution(str1, str2) {
  // [1] 각 문자의 집합을 생성
  const createZipHap = (str1, str2) =>
    [str1, str2].reduce((result, str) => {
      const currStr = str.toUpperCase();
      const currArrStr = [];

      let nStart = 0;
      let nEnd = 2;
      while (currStr.length >= nEnd) {
        const sliceStr = currStr.slice(nStart, nEnd);
        /[A-Z]{2}/.test(sliceStr) && currArrStr.push(sliceStr);
        nStart++;
        nEnd++;
      }
      result.push(currArrStr);
      return result;
    }, []);

  // [2] 교집합 & 합집합 함수 (참고)

  const createUnionIntersect = (arr1, arr2) => {
    const union = [];
    const intersect = [];

    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) >= 0) intersect.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
      union.push(arr2[i]);
    }
    for (let i = 0; i < arr1.length; i++) union.push(arr1[i]);

    return { union, intersect };
  };

  const [first, second] = createZipHap(str1, str2);
  const { union, intersect } = createUnionIntersect(first, second);

  const MAX_16BIT = 2 ** 16;

  if (union.length === 0) return MAX_16BIT; // 분모
  if (intersect.length === 0) return 0; // 분자

  return Math.floor((intersect.length / union.length ) * MAX_16BIT);
}
*/

// 3차시, 통과 실패.... 하... (테케 4, 5, 7, 9, 10, 11, 13)
/* 
function solution(str1, str2) {
  // [1] 각 문자의 집합을 생성
  const createZipHap = (str1, str2) =>
    [str1, str2].reduce((result, str) => {
      const currStr = str.toUpperCase();
      const currArrStr = [];

      let nStart = 0;
      let nEnd = 2;
      while (currStr.length >= nEnd) {
        const sliceStr = currStr.slice(nStart, nEnd);
        /[A-Z]{2}/.test(sliceStr) && currArrStr.push(sliceStr);
        nStart++;
        nEnd++;
      }
      result.push(currArrStr);
      return result;
    }, []);

  // [2] 일반적인 교집합 & 합집합 함수
  const intersect = (arr1, arr2) => {
    const tmp1 = arr1.length > arr2.length ? arr2 : arr1;
    const tmp2 = arr1.length > arr2.length ? arr1 : arr2;
    return tmp1.filter((v) => tmp2.includes(v));
  }; // 교집합 (둘 다 있으면 교집합)
  const union = (arr1, arr2) => [...arr1, ...arr2]; // 합집합

  // --
  const [first, second] = createZipHap(str1, str2);
  const arrIntersect = intersect(first, second);
  const arrUnion = union(first, second);

  const MAX_16BIT = 2 ** 16;

  const a = arrIntersect.length || 1; // 교집합 길이
  const b = arrUnion.length - arrIntersect.length || 1; // 일반적인 합집합길이 - 교집합길이

  return Math.floor((a / b) * MAX_16BIT);
}
*/

// 2차시, 통과 실패 / 또... 잘못됨
/* 
function solution(str1, str2) {
  const MAX_16BIT = 2 ** 16;

  // 교집합 & 합집합 생성
  // 교집합 생성 시 둘 다 있으면 교집합 / 교집합 만들며 해당 요소 splice
  const createIntersectUnion = (arr1, arr2) => {
    const intersect = [];
    const union = [];
    for (let i = 0; i < arr1.length; i++) {
      const item = arr1[i];
      if (arr2.includes(item)) intersect.push(arr1.splice(arr1.indexOf(item), 1));
      arr1[i] && union.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) union.push(arr2[i]);
    return { intersect, union };
  };

  const arrZipHap = [str1, str2].reduce((result, str) => {
    const currStr = str.toUpperCase();
    const currArrStr = [];

    let nStart = 0;
    let nEnd = 2;
    while (currStr.length >= nEnd) {
      const sliceStr = currStr.slice(nStart, nEnd);
      /[A-Z]{2}/.test(sliceStr) && currArrStr.push(sliceStr);
      nStart++;
      nEnd++;
    }
    result.push(currArrStr);
    return result;
  }, []);

  const { intersect, union } = createIntersectUnion(arrZipHap[0], arrZipHap[1]);

  return { intersect, union };
  //   return Math.floor((arrIntersect.length / arrUnion.length) * MAX_16BIT);
}
*/

// 1차시, 통과 실패 / 교집합, 합집합 부분 잘못됨.
/* 
function solution(str1, str2) {
  const MAX_16BIT = 2 ** 16;
  const intersect = (arr1, arr2) => arr1.filter((v) => arr2.includes(v)); // 교집합 (둘 다 있으면 교집합)
  const union = (arr1, arr2) => [...arr1, ...arr2]; // 합집합

  const arrZipHap = [str1, str2].reduce((result, str) => {
    const currStr = str.toUpperCase();
    const currArrStr = [];

    let nStart = 0;
    let nEnd = 2;
    while (currStr.length >= nEnd) {
      const sliceStr = currStr.slice(nStart, nEnd);

      /[A-Z]{2}/.test(sliceStr) && currArrStr.push(sliceStr);
      nStart++;
      nEnd++;
    }
    result.push(currArrStr);
    return result;
  }, []);

  const arrIntersect = intersect(arrZipHap[0], arrZipHap[1]);
  const arrUnion = union(arrZipHap[0], arrZipHap[1]);
  return Math.floor((arrIntersect.length / arrUnion.length) * MAX_16BIT);
}
*/
