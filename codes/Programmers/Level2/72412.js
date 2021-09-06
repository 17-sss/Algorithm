// https://programmers.co.kr/learn/courses/30/lessons/72412
// 순위 검색 (2021 KAKAO BLIND RECRUITMENT)

// (2021.09.06) ---------------------

// 2차시 (하다맘)
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
    result.set(applicant.score, applicant);
    return result;
  }, new Map());

  // const appKeys

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
);  // [1, 1, 1, 1, 2, 4]

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
