// https://school.programmers.co.kr/learn/courses/30/lessons/120885
// 이진수 더하기

// 1차시, 통과 성공
function solution(bin1, bin2) {
  const binToDec = (bin) => {
    const arrBin = bin.split('');
    return arrBin.reverse().reduce((result, v, idx) => {
      result += +v ? Math.pow(2, idx) : 0;
      return result;
    }, 0);
  };
  const decToBin = (dec) => {
    const result = [];
    while (dec > 0) {
      result.push(dec % 2);
      dec = Math.floor(dec / 2);
    }
    return result.reverse().join('');
  };
  if ([bin1, bin2].every((v) => v === '0')) {
    return '0';
  }
  return decToBin(binToDec(bin1) + binToDec(bin2));
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('10', '11'), // "101"
  solution('1001', '1111'), // "11000"
);
