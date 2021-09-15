// https://programmers.co.kr/learn/courses/30/lessons/17686
// 2018 KAKAO BLIND RECRUITMENT : [3차] 파일명 정렬

// (2021.09.15) ---------------------

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
