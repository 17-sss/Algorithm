// https://programmers.co.kr/learn/courses/30/lessons/17686
// 2018 KAKAO BLIND RECRUITMENT : [3차] 파일명 정렬

// (2021.09.15) ---------------------
// 3차시, 통과 성공 (tail은 필요없어!)
const solution = (files) =>
  files
    .reduce((result, fileName) => {
      const matchs = [...fileName.matchAll(/(?<head>\D+)(?<number>\d+)/gi)];
      if (matchs && matchs.length > 0) {
        const { head, number } = matchs[0].groups;
        result.push({ fileName, head, number });
      }
      return result;
    }, [])
    .sort(({ number: aNum, head: aHead }, { number: bNum, head: bHead }) => {
      const isSameHead = aHead.toUpperCase() === bHead.toUpperCase();
      const isSameNum = aNum === bNum;
      if (isSameHead && isSameNum) return 0;
      else if (!isSameHead) return aHead.toUpperCase() > bHead.toUpperCase() ? 1 : -1;
      return aNum - bNum;
    })
    .map(({ fileName }) => fileName);

console.log(
  solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']), // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]
  solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat']), // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
);

// 2차시, 통과 성공 (정규표현식 공부 필요)
/* 
const solution = (files) =>
  files
    .reduce((result, fileName) => {
      const matchs = fileName.split(/(\D+)(\d+)(.*)/gi).filter((v) => v);
      const [head, number, tail] = matchs;
      result.push({ fileName, head, number, tail });
      return result;
    }, [])
    .sort(({ number: aNum, head: aHead }, { number: bNum, head: bHead }) => {
      const isSameHead = aHead.toUpperCase() === bHead.toUpperCase();
      const isSameNum = aNum === bNum;
      if (isSameHead && isSameNum) return 0;
      else if (!isSameHead) return aHead.toUpperCase() > bHead.toUpperCase() ? 1 : -1;
      return aNum - bNum;
    })
    .map(({ fileName }) => fileName);
 */

// 1차시, 통과 실패 (matchAll 써보려다가... ㅠ)
/*
function solution(files) {
  const REG_EX = /(?<HEAD>[a-z\-]+)(?<NUMBER>\d+)(?<TAIL>[a-z\s\.\-]+)/gi;

  return files
    .reduce((result, fileName) => {
      const regMatchs = [...fileName.matchAll(REG_EX)];
      const matchs = regMatchs && regMatchs.length > 0 ? regMatchs[0].groups : null;
      if (matchs) {
        const { HEAD: head, NUMBER: number, TAIL: tail } = matchs;
        result.push({ fileName, head: head, number: +number, tail });
      } else result.push({ fileName, head: null, number: null, tail: null });
      return result;
    }, [])
    .sort((a, b) => {
      const { number: aNum, head: aHead } = a;
      const { number: bNum, head: bHead } = b;
      const isSameHead = aHead.toUpperCase() === bHead.toUpperCase();
      const isSameNum = aNum === bNum;
      if (isSameHead && isSameNum) return 0;
      if (!isSameHead) return aHead.toUpperCase() > bHead.toUpperCase() ? 1 : -1;
      return aNum - bNum;
    })
    .map(({ fileName }) => fileName);
}
*/
