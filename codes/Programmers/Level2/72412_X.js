// https://programmers.co.kr/learn/courses/30/lessons/72412
// 순위 검색 (2021 KAKAO BLIND RECRUITMENT)

// (2021.09.08) ---------------------

// 2차시, 참고 (전혀 모르겠음.. 이게 레벨2라고?)
// 참고: https://gooweon.tistory.com/175

function solution(info, query) {
  const answer = [];
  const infoMap = {};

  // [1] 조합
  const combi = (cnt, key, currInfo, score) => {
    if (cnt === 4) {
      if (infoMap[key]) infoMap[key].push(score);
      else infoMap[key] = [score];
      return;
    }
    combi(cnt + 1, key + currInfo[cnt], currInfo, score);
    combi(cnt + 1, key + '-', currInfo, score);
  };

  const infoLength = info.length;
  for (let i = 0; i < infoLength; i++) {
    const currInfo = info[i].split(' ');
    const score = +currInfo.pop();
    combi(0, '', currInfo, score);
  }

  for (const key in infoMap)
    infoMap[key] = infoMap[key].sort((a, b) => a - b);

  // [2] 이분 탐색
  const qLength = query.length;
  for (let i = 0; i < qLength; i++) {
    const q = query[i];
    const qKey = q.replace(/\s+|\d+|(and)/g, '');
    const qScore = q.match(/\d+/g) ? (+q.match(/\d+/g)[0]) : null;

    const findInfo = infoMap[qKey];
    if (findInfo && (qScore !== null && (!Number.isNaN(qScore))) ) {
      let left = 0;
      let right = findInfo.length;
      while(left < right) {
        const mid = Math.floor((right + left) / 2);
        if (findInfo[mid] >= qScore) right = mid;
        else if (findInfo[mid] < qScore) left = mid + 1;
      }
      answer.push(findInfo.length - left)

    } else answer.push(0);
  }
  return answer;
}

// ---

solution(
  [
    'java backend junior pizza 150',
    'python frontend senior chicken 210',
    'python frontend senior chicken 150',
    'cpp backend senior pizza 260',
    'java backend junior chicken 80',
    'python backend senior chicken 50',
  ],
  [
    'java and backend and junior and pizza 100',
    'python and frontend and senior and chicken 200',
    'cpp and - and senior and pizza 250',
    '- and backend and senior and - 150',
    '- and - and - and chicken 100',
    '- and - and - and - 150',
  ],
); // [1, 1, 1, 1, 2, 4]

// (2021.09.06) ---------------------

// 1차시, 효율성 통과 실패
/* 
class Applicant {
  constructor(language, job, carrer, food, score) {
    this.language = language; // 언어
    this.job = job; // 직군
    this.career = carrer; // 경력
    this.food = food; // 음식
    this.score = score; // 점수
  }
}

function solution(info, query) {
  const answer = [];
  const applicants = info.reduce((result, sInfo) => {
    const applicant = new Applicant(...sInfo.split(' '));
    result.push(applicant);
    return result;
  }, []);

  query.forEach((q) => {
    const arrQ = q.replace(/\s+|\d+/g, '').split('and');
    const arrScore = q.match(/\d+/g);
    let score = 0;
    if (arrScore.length > 0) score = arrScore[0];

    const qObj = new Applicant(...arrQ, score);
    const cnt = applicants.filter(({ language, job, career, food, score }) => {
      const bLang = qObj.language !== '-' ? language === qObj.language : true;
      const bJob = qObj.job !== '-' ? job === qObj.job : true;
      const bCareer = qObj.career !== '-' ? career === qObj.career : true;
      const bFood = qObj.food !== '-' ? food === qObj.food : true;
      const bScore = +score >= +qObj.score;

      return bLang && bJob && bCareer && bFood && bScore;
    }).length;

    answer.push(cnt);
  });

  return answer;
}
 */
