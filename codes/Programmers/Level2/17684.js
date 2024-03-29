// https://programmers.co.kr/learn/courses/30/lessons/17684
// 2018 KAKAO BLIND RECRUITMENT : [3차] 압축

// (2021.09.09) ---------------------

const createDictionary = () => {
  const LANGE = 25;
  const START = 65;
  const LENGTH = START + LANGE;

  const map = new Map();
  for (let i = START; i <= LENGTH; i++) map.set(String.fromCharCode(i), i + 1 - START);
  return map;
};

function solution(msg) {
  const dicMap = createDictionary();
  const result = [];

  let strMsg = msg;

  while (strMsg.length !== 0) {
    let word = '';

    const arrSlices = [];
    let isAllInDic = true;
    for (let i = 1; i <= strMsg.length; i++) {
      const strSlice = strMsg.slice(0, i);
      if (!dicMap.has(strSlice)) {
        word = arrSlices[arrSlices.length - 1];
        strMsg = strMsg.substring(i - 1, Number.MAX_VALUE);
        dicMap.set(strSlice, dicMap.size + 1);
        isAllInDic = false;
        break;
      }
      arrSlices.push(strSlice);
    }

    if (!word && isAllInDic && arrSlices.length > 0) {
      word = arrSlices[arrSlices.length - 1];
      strMsg = '';
    }

    const currWordID = word ? dicMap.get(word) : null;
    currWordID && result.push(currWordID);
  }

  return result;
}

console.log(
  //   solution('KAKAO'), // [11, 1, 27, 15]
  //   solution('TOBEORNOTTOBEORTOBEORNOT'), // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
  solution('ABABABABABABABAB'), // [1, 2, 27, 29, 28, 31, 30]
  //   solution(
  //     // [20, 8, 1, 20, 27, 29, 9, 19, 33, 31, 30, 28, 20, 33, 14, 15, 39, 19, 41, 43, 36, 9, 39, 46, 38, 47, 34, 19, 36, 52, 45, 40, 42, 35, 38, 48, 62, 54, 51, 61, 53, 55, 66, 57, 44, 59, 64, 32, 49, 60, 29, 52, 76, 37, 32, 71, 43, 70, 47, 75, 73, 80, 43, 79, 56, 72, 84, 61, 86, 68, 81, 90, 69, 92, 72, 85, 63, 96, 89, 87, 91, 83, 101, 94, 103, 65, 97, 106, 99, 108, 50, 74, 111, 77, 66, 98, 81, 70, 93, 118, 117, 88, 33, 122, 116, 58, 127, 62, 127, 78, 114, 123, 100, 133, 95, 112, 105, 104, 132, 145, 87, 134, 130, 129, 137, 131, 82, 79, 148, 151, 150, 144, 153, 159, 102, 135, 121, 156, 159, 125, 75, 162, 113, 158, 124, 109, 126, 149, 67, 142, 146, 166, 155, 158, 174, 171, 140, 119, 128, 175, 120, 138, 152, 161, 174, 181, 139, 154, 141, 187, 143, 176, 165, 172, 167, 191, 164, 182, 194, 184, 136, 170, 193, 147, 86]
  //     'THATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITISTHATTHATISISTHATTHATISNOTISNOTISTHATITITIS',
  //   ),
);
